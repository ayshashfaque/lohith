import cv2
import numpy as np
import os

def apply_kodak_grade(frame):
    img = frame.astype(np.float32) / 255.0
    
    # 1. Local Contrast Enhancement (Clarity) on L channel of LAB
    lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    
    l_blur = cv2.GaussianBlur(l, (0, 0), sigmaX=30, sigmaY=30)
    l_detail = l - l_blur
    
    # Enhance micro-contrast (details on marble, stone, etc.)
    l_enhanced = l + 0.12 * l_detail
    l_enhanced = np.clip(l_enhanced, 0.0, 100.0)
    
    lab_enhanced = cv2.merge([l_enhanced, a, b])
    img_lce = cv2.cvtColor(lab_enhanced, cv2.COLOR_LAB2BGR)
    
    # 2. Kodak Vision3 250D Tone Curve
    x = np.array([0.0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 0.9, 0.95, 1.0])
    y_r = np.array([0.024, 0.058, 0.092, 0.178, 0.33, 0.51, 0.68, 0.835, 0.925, 0.965, 0.99])
    y_g = np.array([0.024, 0.058, 0.09, 0.175, 0.325, 0.50, 0.665, 0.82, 0.91, 0.95, 0.98])
    y_b = np.array([0.024, 0.058, 0.088, 0.172, 0.32, 0.49, 0.645, 0.795, 0.895, 0.94, 0.97])
    
    xp = np.linspace(0, 1, 256)
    lut_r = np.interp(xp, x, y_r)
    lut_g = np.interp(xp, x, y_g)
    lut_b = np.interp(xp, x, y_b)
    
    b_ch, g_ch, r_ch = cv2.split(img_lce)
    b_ch = np.clip(b_ch, 0.0, 1.0)
    g_ch = np.clip(g_ch, 0.0, 1.0)
    r_ch = np.clip(r_ch, 0.0, 1.0)
    
    b_graded = np.interp(b_ch, xp, lut_b).astype(np.float32)
    g_graded = np.interp(g_ch, xp, lut_g).astype(np.float32)
    r_graded = np.interp(r_ch, xp, lut_r).astype(np.float32)
    
    img_graded = cv2.merge([b_graded, g_graded, r_graded])
    
    # 3. Enhance Warm Golden Glow (Interior Lighting & Chandelier) in HLS
    hls = cv2.cvtColor(img_graded, cv2.COLOR_BGR2HLS)
    h, l_hls, s = cv2.split(hls)
    
    h_float = h.astype(np.float32)
    s_float = s.astype(np.float32)
    
    diff = h_float - 15.0
    diff = np.where(diff > 90, diff - 180, diff)
    diff = np.where(diff < -90, diff + 180, diff)
    
    warm_mask = np.exp(-(diff**2) / (2.0 * (7.5**2)))
    
    # Saturation boost scaled by luminance (to target highlights/midtones)
    boost = 1.0 + 0.18 * warm_mask * l_hls
    s_enhanced = np.clip(s_float * boost, 0.0, 1.0)
    
    hls_enhanced = cv2.merge([h, l_hls, s_enhanced])
    img_final = cv2.cvtColor(hls_enhanced, cv2.COLOR_HLS2BGR)
    
    return np.clip(img_final * 255.0, 0.0, 255.0).astype(np.uint8)

def main():
    video_path = r"c:\Users\DELL\lohith\check.mp4"
    output_dir = r"c:\Users\DELL\lohith\public\assets\videos"
    output_path = os.path.join(output_dir, "graded_hero.mp4")
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    print(f"Opening source video: {video_path}")
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Error: Could not open source video.")
        return
        
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    
    print(f"Video stats - Res: {width}x{height}, FPS: {fps}, Frames: {frame_count}")
    
    # Try different video encoders. standard mp4v or avc1
    # We will try 'avc1' first as it has better browser compatibility (H264).
    # If that fails, we fall back to 'mp4v'
    codecs_to_try = ['avc1', 'mp4v']
    writer = None
    
    for codec in codecs_to_try:
        fourcc = cv2.VideoWriter_fourcc(*codec)
        print(f"Attempting to initialize VideoWriter with codec '{codec}'...")
        writer = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
        if writer.isOpened():
            print(f"Successfully initialized VideoWriter with codec '{codec}'!")
            break
        else:
            print(f"Codec '{codec}' failed.")
            writer.release()
            writer = None
            
    if writer is None:
        print("Error: Could not initialize any VideoWriter codec.")
        cap.release()
        return
        
    print("Processing frames...")
    processed_count = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        graded_frame = apply_kodak_grade(frame)
        writer.write(graded_frame)
        
        processed_count += 1
        if processed_count % 30 == 0 or processed_count == frame_count:
            print(f"Processed {processed_count}/{frame_count} frames...")
            
    cap.release()
    writer.release()
    print(f"Finished rendering graded video! Output saved to: {output_path}")

if __name__ == "__main__":
    main()

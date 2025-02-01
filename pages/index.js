import { useEffect } from "react";
import Head from "next/head";
import './pages/global.css'; // ✅ Cách thông dụng

export default function Home() {
  useEffect(() => {
    // Load MathJax khi component mount
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
      },
      svg: {
        fontCache: 'global'
      }
    };

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js";
    script.async = true;
    script.onload = () => console.log("✅ MathJax đã tải!");
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>ÔN LUYỆN TOÁN THCS - TRUNG TÂM ÁNH DƯƠNG</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1>ÔN LUYỆN TOÁN LỚP 9 - THẦY GIÁO TÔN THANH CHƯƠNG</h1>

      {/* Khung đăng nhập */}
      <div id="loginContainer">
        <input type="text" id="studentId" placeholder="Nhập mã học sinh" />
        <button id="loginBtn">Đăng nhập</button>
      </div>

      {/* Nội dung chính */}
      <div id="mainContent" style={{ display: "none" }}>
        <h2>Danh sách bài tập</h2>
        <div id="problemList" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}></div>

        {/* Các nút điều khiển */}
        <div id="topControls">
          <input type="number" id="problemIndexInput" placeholder="Nhập số thứ tự (1, 2, ...)" />
          <button id="selectProblemBtn">Hiển thị bài tập</button>
          <button id="randomProblemBtn">Lấy bài tập ngẫu nhiên</button>
        </div>

        {/* Hiển thị tiến trình */}
        <div id="progressContainer" style={{ display: "none" }}>
          <p>
            Số bài: <span id="completedExercises">0</span> | 
            Điểm TB: <span id="averageScore">0</span>
          </p>
        </div>

        {/* Đề bài */}
        <div id="problemContainer">
          <label htmlFor="problemText">Đề bài:</label>
          <div id="problemText"></div>
        </div>

        {/* Các nút chức năng */}
        <div id="bottomControls">
          <button id="submitBtn">Chấm Bài</button>
          <button id="hintBtn">Gợi ý</button>
          <button id="deleteAllBtn">Xóa tất cả</button>
        </div>

        <div id="result"></div>

        {/* Ảnh bài làm của học sinh */}
        <label htmlFor="studentImage">Ảnh bài làm của học sinh:</label>
        <input type="file" id="studentImage" accept="image/*" />

        {/* Chụp ảnh từ camera */}
        <label htmlFor="cameraStream">Hoặc chụp ảnh từ camera:</label>
        <div id="cameraAndImageContainer">
          <div id="videoContainer">
            <video id="cameraStream" autoPlay playsInline></video>
            <button id="captureButton" style={{ marginTop: "10px" }}>Chụp ảnh</button>
          </div>
          <div id="imageContainer">
            <canvas id="photoCanvas" style={{ display: "none" }}></canvas>
            <img id="capturedImage" alt="Ảnh đã chụp" style={{ maxWidth: "100%", display: "none" }} />
          </div>
        </div>
      </div>

      {/* Nạp JavaScript */}
      <script src="/app.js"></script>
    </>
  );
}

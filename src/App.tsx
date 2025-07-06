import { useState } from "react";

function App() {
  // 상태 선언
  const [songs, setSongs] = useState([]);
  const [scores, setScores] = useState([]);

  // 애창곡 추가
  const addSong = (title, singer, no) => {
    setSongs([...songs, { title, singer, no }]);
  };

  // 점수 기록
  const addScore = (songTitle, score) => {
    setScores([...scores, { songTitle, score, date: new Date().toISOString().slice(0, 10) }]);
  };

  // UI
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-indigo-100 to-blue-100">
      <div className="w-full max-w-md mx-auto bg-white/80 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-4">나의 노래방+</h1>
        <p className="text-gray-500 text-center mb-6">반응형 카드, 중앙 정렬, Tailwind 100%</p>
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow p-4 text-center">여기에 리스트</div>
          <div className="bg-white rounded-xl shadow p-4 text-center">여기에 점수 기록</div>
        </div>
      </div>
    </div>
  );
}

// 애창곡 추가 폼
function AddSongForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [singer, setSinger] = useState("");
  const [no, setNo] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (title && singer) {
          onAdd(title, singer, no);
          setTitle(""); setSinger(""); setNo("");
        }
      }}
      className="flex gap-2 mt-2"
    >
      <input placeholder="곡명" value={title} onChange={e => setTitle(e.target.value)} className="border p-1" />
      <input placeholder="가수" value={singer} onChange={e => setSinger(e.target.value)} className="border p-1" />
      <input placeholder="번호" value={no} onChange={e => setNo(e.target.value)} className="border p-1" />
      <button className="px-2 bg-blue-500 text-white rounded">추가</button>
    </form>
  );
}

// 점수 추가 폼
function AddScoreForm({ onAdd, songList }) {
  const [songTitle, setSongTitle] = useState("");
  const [score, setScore] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (songTitle && score) {
          onAdd(songTitle, score);
          setSongTitle(""); setScore("");
        }
      }}
      className="flex gap-2 mt-2"
    >
      <select value={songTitle} onChange={e => setSongTitle(e.target.value)} className="border p-1">
        <option value="">곡 선택</option>
        {songList.map((s, i) => (
          <option key={i} value={s.title}>{s.title}</option>
        ))}
      </select>
      <input type="number" placeholder="점수" value={score} onChange={e => setScore(e.target.value)} className="border p-1 w-20" />
      <button className="px-2 bg-green-500 text-white rounded">기록</button>
    </form>
  );
}

export default App;
import { useState } from "react";
import "./App.css";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
const rchar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

export default function App() {
  const [message, setMessage] = useState("");
  const [flying, setFlying] = useState([]);
  const [animating, setAnimating] = useState(false);

  function handleEncrypt() {
    if (!message.trim() || animating) return;

    setAnimating(true);

    const letters = message.split("").map((ch) => ({
      id: Math.random().toString(36).slice(2),
      char: ch,
      dx: (Math.random() * 2 - 1) * 100,
      dy: (Math.random() * -1 - 0.2) * 120,
      rot: (Math.random() * 2 - 1) * 25,
      fly: false,
    }));
    setFlying(letters);

    const interval = setInterval(() => {
      setMessage("");
      setFlying((prev) => prev.map((l) => ({ ...l, char: rchar() })));
    }, 40);

    setTimeout(() => {
      clearInterval(interval);
      setFlying((prev) => prev.map((l) => ({ ...l, fly: true })));
      setTimeout(() => {
        setFlying([]);
        setAnimating(false);
      }, 4000);
    }, 3000);
  }

  return (
    <div className="container">
      <h1>Encryption Area</h1>
      <div className="encryption-area">
        <div className="encryption-in-out">
          <div className="encryption-input">
            <div className="encryption-input-box">
              <textarea
                placeholder="O que precisamos encriptar hoje?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={animating}
              />
              <div className="flying-layer">
                {flying.map((l) => (
                  <span
                    key={l.id}
                    className={`fly-char${l.fly ? " fly" : ""}`}
                    style={{
                      "--dx": `${l.dx}px`,
                      "--dy": `${l.dy}px`,
                      "--rot": `${l.rot}deg`,
                    }}
                  >
                    {l.char}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="encryption-output">
            <textarea type="text" />
          </div>
        </div>

        <button className="btn-encrypt" type="button" onClick={handleEncrypt}>
          <span className="text">Encrypt</span>
          <span className="icon">
            <GiPadlock />
          </span>
        </button>
      </div>

      <h1>Decryption Area</h1>
      <div className="decryption-area">
        <div className="decryption-in-out">
          <div className="decryption-input">
            <textarea type="text" />
          </div>
          <div className="decryption-output">
            <textarea type="text" />
          </div>
        </div>
        <button className="btn-decrypt" type="button">
          <span className="text">Decrypt</span>
          <span className="icon">
            <GiPadlockOpen />
          </span>
        </button>
      </div>
    </div>
  );
}

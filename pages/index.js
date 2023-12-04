import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const changeTheme = (theme) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="grid place-items-center">
        <div>
          <button
            className="py-2 px-8 bg-primary text-primary-text m-2"
            onClick={() => changeTheme("")}
          >
            Default
          </button>
          <button
            className="py-2 px-8 bg-secondary text-secondary-text m-2"
            onClick={() => changeTheme("")}
          >
            Default
          </button>
          <button
            className="py-2 px-8 bg-buttons text-typography m-2"
            onClick={() => changeTheme("theme1")}
          >
            theme 1
          </button>
          <button
            className="py-2 px-8 bg-buttons text-typography m-2"
            onClick={() => changeTheme("theme2")}
          >
            theme 2
          </button>
          <button
            className="py-2 px-8 bg-buttons text-typography m-2"
            onClick={() => changeTheme("theme3")}
          >
            theme 3
          </button>
        </div>
      </div>
    </main>
  );
}

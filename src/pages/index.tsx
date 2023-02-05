import { type NextPage } from "next";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const generatePdf = async () => {
    const el = ref.current;
    if (!el) return;
    const canvas = await html2canvas(el);
    const { width, height } = canvas;
    const pdf = new jsPDF("l", "px", [height, width]);
    pdf.addImage(canvas, "png", 0, 0, width, height);
    pdf.save();
  };

  return (
    <div className="overflow-scroll">
      <button
        onClick={() => {
          void generatePdf();
        }}
        className="mb-4 rounded bg-blue-800 p-2 text-white"
      >
        gerar pdf
      </button>

      <div ref={ref} className="flex min-w-fit">
        {Array.from(Array(100).keys()).map((k) => (
          <div
            key={k}
            className="flex h-32 w-32 shrink-0 items-center justify-center border"
          >
            Texto
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

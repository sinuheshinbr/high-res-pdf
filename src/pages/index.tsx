import Tree from "react-d3-tree";
import { type NextPage } from "next";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

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
    <>
      <button
        onClick={() => {
          void generatePdf();
        }}
        className="mb-4 rounded bg-blue-800 p-2 text-white"
      >
        gerar pdf
      </button>
      <div ref={ref} id="treeWrapper" className="h-[600px] w-[3000px]">
        <Tree
          zoomable={false}
          orientation="vertical"
          translate={{ x: 1400, y: 100 }}
          data={orgChart}
        />
      </div>
    </>
  );
};

export default Home;

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTtpoxwXkHiCmmSX9bRZM7DAIrhFHpsccTKTfE8cRr5J6lH7bK6K8GMJhK7zaI6F_JNRtKrmV08i4o/pub?gid=0&single=true&output=csv";

async function loadStreams() {
  const res = await fetch(CSV_URL);
  if (!res.ok) throw new Error("Sheet fetch failed: " + res.status);
  const { data } = Papa.parse(await res.text(), { header: true, skipEmptyLines: true });
  return data
    .map((r) => ({
      label: (r.label || "").trim(),
      title: (r.title || "").trim(),
      start: (r.start || "").trim(),
      end: (r.end || "").trim() || undefined,
      scheduled: /^true$/i.test((r.scheduled || "").trim()),
      url: (r.url || "").trim() || "#",
    }))
    .filter((s) => s.label && Number.isFinite(new Date(s.start).getTime()));
}

async function main() {
  const streams = await loadStreams();

  const stripeCache = new Map();

  function stripe(color, size = 10) {
    const key = `${color}|${size}`;
    if (stripeCache.has(key)) return stripeCache.get(key);

    const c = document.createElement("canvas");
    c.width = c.height = size;
    const g = c.getContext("2d");
    g.fillStyle = color;
    // two triangles that together form one thick diagonal band, tiling seamlessly
    g.beginPath();
    g.moveTo(0, size / 2);
    g.lineTo(size / 2, 0);
    g.lineTo(size, 0);
    g.lineTo(0, size);
    g.closePath();
    g.fill();
    g.beginPath();
    g.moveTo(size, size / 2);
    g.lineTo(size / 2, size);
    g.lineTo(size, size);
    g.closePath();
    g.fill();

    const pattern = g.createPattern(c, "repeat");
    stripeCache.set(key, pattern);
    return pattern;
  }

  const futureStripes = {
    id: "futureStripes",
    afterDatasetsDraw(chart) {
      const {
        ctx,
        chartArea,
        scales: { x },
      } = chart;
      const now = chart.options.plugins.annotation.annotations.line1.xMin; // same value the red line uses
      const meta = chart.getDatasetMeta(0);

      ctx.save();
      ctx.beginPath();
      ctx.rect(chartArea.left, chartArea.top, chartArea.width, chartArea.height);
      ctx.clip(); // don't paint over the axes while panning

      streams.forEach((s, i) => {
        if (s.end !== "LIVE") return;
        const end = chart.data.datasets[0].data[i].x[1];
        if (end <= now) return; // already past the estimate, nothing to stripe
        const bar = meta.data[i];
        const x0 = x.getPixelForValue(now);
        const x1 = x.getPixelForValue(end);
        ctx.fillStyle = stripe(colorOf(s).hover);
        ctx.fillRect(x0, bar.y - bar.height / 2, x1 - x0, bar.height);
      });

      ctx.restore();
    },
  };
  const credit = {
    id: "credit",
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      ctx.save();
      ctx.font = `12px ${Chart.defaults.font.family}`;
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.textAlign = "right";
      ctx.textBaseline = "top";
      ctx.fillText("Chart by @zerpsong", chartArea.right - 6, chartArea.top + 6);
      ctx.restore();
    },
  };
  const palette2 = {
    gale: { bg: "oklch(0.753 0.154 84.45 / 0.5)", hover: "oklch(0.667 0.137 84.62 / 0.8)" },
    cassian: { bg: "oklch(0.745 0.158 151.53 / 0.5)", hover: "oklch(0.657 0.14 151.4 / 0.8)" },
    lucien: { bg: "oklch(0.79 0.116 16.73 / 0.5)", hover: "oklch(0.727 0.163 18.78 / 0.8)" },
    zander: { bg: "oklch(0.772 0.13 309.74 / 0.5)", hover: "oklch(0.692 0.183 310.31 / 0.8)" },
    rosco: { bg: "oklch(0.785 0.135 354.64 / 0.5)", hover: "oklch(0.715 0.195 354.15 / 0.8)" },
    malim: { bg: "oklch(0.781 0.108 17.68 / 0.5)", hover: "oklch(0.708 0.158 19.1 / 0.8)" },
    altus: { bg: "oklch(0.78 0.09 275.67 / 0.5)", hover: "oklch(0.704 0.125 273.6 / 0.8)" },
    ryzar: { bg: "oklch(0.756 0.134 29.98 / 0.5)", hover: "oklch(0.676 0.199 36.37 / 0.8)" },
    nayuta: { bg: "oklch(0.796 0.051 292.88 / 0.5)", hover: "oklch(0.729 0.069 292.25 / 0.8)" },
    ashkariel: { bg: "oklch(0.757 0 0 / 0.5)", hover: "oklch(0.673 0 0 / 0.8)" },
    shiki: { bg: "oklch(0.809 0.069 309.4 / 0.5)", hover: "oklch(0.741 0.097 310.16 / 0.8)" },
    liron: { bg: "oklch(0.797 0.102 4.9 / 0.5)", hover: "oklch(0.734 0.145 4.85 / 0.8)" },
    caelen: { bg: "oklch(0.792 0.043 255.04 / 0.5)", hover: "oklch(0.719 0.061 253.37 / 0.8)" },
    elias: { bg: "oklch(0.761 0.115 185.76 / 0.5)", hover: "oklch(0.686 0.104 185.31 / 0.8)" },
    nimue: { bg: "oklch(0.81 0.054 231.05 / 0.5)", hover: "oklch(0.712 0.054 230.67 / 0.8)" },
    saeir: { bg: "oklch(0.787 0.069 270.11 / 0.5)", hover: "oklch(0.718 0.094 268.34 / 0.8)" },
    solan: { bg: "oklch(0.765 0.061 149.37 / 0.5)", hover: "oklch(0.674 0.053 149.34 / 0.8)" },
    varis: { bg: "oklch(0.79 0.053 313.77 / 0.5)", hover: "oklch(0.723 0.073 315.25 / 0.8)" },
    aurel: { bg: "oklch(0.766 0.101 96.02 / 0.5)", hover: "oklch(0.68 0.09 95.5 / 0.8)" },
  };
  const palette = {
    gale: { bg: "oklch(0.8448 0.1663 83.9 / 0.5)", hover: "oklch(0.8448 0.1663 83.9 / 0.8)" },
    cassian: { bg: "oklch(0.7451 0.1577 151.54 / 0.5)", hover: "oklch(0.7451 0.1577 151.54 / 0.8)" },
    lucien: { bg: "oklch(0.5044 0.1971 23.08 / 0.5)", hover: "oklch(0.5044 0.1971 23.08 / 0.8)" },
    zander: { bg: "oklch(0.5411 0.2272 311.51 / 0.5)", hover: "oklch(0.5411 0.2272 311.51 / 0.8)" },
    rosco: { bg: "oklch(0.6512 0.2577 354.04 / 0.5)", hover: "oklch(0.6512 0.2577 354.04 / 0.8)" },
    malim: { bg: "oklch(0.4713 0.1686 22.96 / 0.5)", hover: "oklch(0.4713 0.1686 22.96 / 0.8)" },
    altus: { bg: "oklch(0.5598 0.1882 266.4 / 0.5)", hover: "oklch(0.5598 0.1882 266.4 / 0.8)" },
    ryzar: { bg: "oklch(0.5912 0.1774 36.91 / 0.5)", hover: "oklch(0.5912 0.1774 36.91 / 0.8)" },
    nayuta: { bg: "oklch(0.3819 0.0993 290.92 / 0.5)", hover: "oklch(0.3819 0.0993 290.92 / 0.8)" },
    ashkariel: { bg: "oklch(0.5931 0 0 / 0.5)", hover: "oklch(0.5931 0 0 / 0.8)" },
    shiki: { bg: "oklch(0.7409 0.0968 310.14 / 0.5)", hover: "oklch(0.7409 0.0968 310.14 / 0.8)" },
    liron: { bg: "oklch(0.5231 0.1816 5.33 / 0.5)", hover: "oklch(0.5231 0.1816 5.33 / 0.8)" },
    caelen: { bg: "oklch(0.719 0.0606 253.37 / 0.5)", hover: "oklch(0.719 0.0606 253.37 / 0.8)" },
    elias: { bg: "oklch(0.6865 0.1041 185.33 / 0.5)", hover: "oklch(0.6865 0.1041 185.33 / 0.8)" },
    nimue: { bg: "oklch(0.8101 0.0542 231.07 / 0.5)", hover: "oklch(0.8101 0.0542 231.07 / 0.8)" },
    saeir: { bg: "oklch(0.5073 0.11 263.68 / 0.5)", hover: "oklch(0.5073 0.11 263.68 / 0.8)" },
    solan: { bg: "oklch(0.7649 0.061 149.39 / 0.5)", hover: "oklch(0.7649 0.061 149.39 / 0.8)" },
    varis: { bg: "oklch(0.5062 0.0872 315.37 / 0.5)", hover: "oklch(0.5062 0.0872 315.37 / 0.8)" },
    aurel: { bg: "oklch(0.749 0.111 92.56 / 0.5)", hover: "oklch(0.749 0.111 92.56 / 0.8)" },
  };
  const streamColor = { "Gale Galleon": "gale", "Cassian Floros": "cassian", "Lucien Lunaris": "lucien", "Zander Netherbrand": "zander", "Rosco Graves": "rosco", "Malim Cendari": "malim", "Altus Zendoji": "altus", "Ryzar Blazenfang": "ryzar", "Nayuta Umbrage": "nayuta", Ashkariel: "ashkariel", "Shiki Katagami": "shiki", "Liron Lockheart": "liron", "Caelen Strayfe": "caelen", "Elias Delborne": "elias", "Nimue Eversea": "nimue", "Saeir Alarie": "saeir", "Solan Fernwick": "solan", "Varis Hemlock": "varis", "Aurel Ophidia": "aurel" };
  const fallback = { bg: "oklch(0.6178 0.2054 267.56 / 0.5)", hover: "oklch(0.6178 0.2054 267.56 / 0.8)" };
  const colorOf = (s) => palette[streamColor[s.label]] ?? fallback;

  const labels = ["Gale Galleon", "Cassian Floros", "Lucien Lunaris", "Zander Netherbrand", "Rosco Graves", "Malim Cendari", "Altus Zendoji", "Ryzar Blazenfang", "Nayuta Umbrage", "Ashkariel", "Shiki Katagami", "Liron Lockheart", "Caelen Strayfe", "Elias Delborne", "Nimue Eversea", "Saeir Alarie", "Solan Fernwick", "Varis Hemlock", "Aurel Ophidia"];

  const t = (d) => new Date(d).getTime();
  const timeFmt = new Intl.DateTimeFormat([], { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
  const fmt = (ms) => timeFmt.format(ms);
  const tz = timeFmt.formatToParts().find((p) => p.type === "timeZoneName").value; // e.g. "PDT"
  const startOfLocalDay = (ms) => {
    const d = new Date(ms);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  };

  const NOW = new Date();
  const HOUR = 3600000;
  const DAY = 24 * HOUR;
  const fullMin = startOfLocalDay(t("2026-10-10T15:00Z"));
  const fullMax = startOfLocalDay(t("2026-10-24T08:00Z")) + DAY;

  const EST_HOURS = 4; // assumed length for scheduled streams with no end
  const endOf = (s) => (s.end === "LIVE" ? Math.max(Date.now(), t(s.start) + EST_HOURS * HOUR) : s.end ? t(s.end) : t(s.start) + EST_HOURS * HOUR);

  const canvas = document.getElementById("c");
  Chart.defaults.color = "#000";
  Chart.defaults.font.family = '"Noto Serif", "Noto Serif JP", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';
  Chart.defaults.font.size = 13;
  Chart.defaults.font.lineHeight = 1.25;

  const chart = new Chart(canvas, {
    type: "bar",
    plugins: [futureStripes, credit],
    data: {
      labels: labels,
      datasets: [
        {
          data: streams.map((s) => ({ x: [t(s.start), endOf(s)], y: s.label })),
          backgroundColor: streams.map((s) => (s.scheduled ? stripe(colorOf(s).hover) : colorOf(s).bg)),
          hoverBackgroundColor: streams.map((s) => (s.scheduled ? stripe(colorOf(s).hover) : colorOf(s).hover)),
          borderColor: streams.map((s) => colorOf(s).hover),
          borderWidth: streams.map((s) => (s.scheduled ? 1 : 0)),
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: "y",
      maintainAspectRatio: false,

      scales: {
        x: {
          type: "time",
          title: { display: true, text: `Times shown in ${tz}` },
          min: NOW - 2 * DAY - 10 * HOUR,
          max: NOW.getTime() + 14 * HOUR,
          afterBuildTicks(scale) {
            const STEPS_H = [1, 3, 6, 12, 24, 48]; // allowed tick spacings, in hours
            const width = scale.width || scale.chart.width;
            const pxPerHour = width / ((scale.max - scale.min) / HOUR);
            // smallest spacing that leaves at least ~55px between labels
            const step = STEPS_H.find((h) => h * pxPerHour >= 55) ?? STEPS_H[STEPS_H.length - 1];

            // anchor at a local midnight so ticks don't slide while panning
            const d = new Date(Math.min(fullMin, startOfLocalDay(scale.min)));
            const ticks = [];
            while (d.getTime() <= scale.max) {
              if (d.getTime() >= scale.min) ticks.push({ value: d.getTime() });
              if (step >= 24)
                d.setDate(d.getDate() + step / 24); // whole days: always lands on local midnight
              else d.setHours(d.getHours() + step);
            }
            scale.ticks = ticks;
          },
          ticks: {
            maxRotation: 0,
            callback(value) {
              const d = new Date(value);
              const time = d.toLocaleTimeString([], { hour: "numeric" });
              return d.getHours() === 0 ? [time, d.toLocaleDateString([], { month: "short", day: "numeric" })] : [time, "\u00A0"]; // keeps the axis two lines tall at all times
            },
          },
        },
        y: {
          ticks: {
            autoSkip: false,
            callback(value) {
              return this.getLabelForValue(value).split(" "); // "Zander Netherbrand" -> ["Zander", "Netherbrand"]
            },
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items) => streams[items[0].dataIndex].label,
            label: (ctx) => {
              const s = streams[ctx.dataIndex];
              const [start, end] = ctx.raw.x;
              console.log(s.title);
              console.log(s.end);

              if (s.end === "LIVE") {
                const pastEstimate = Date.now() >= start + EST_HOURS * HOUR;
                return [s.title, pastEstimate ? `${fmt(start)} – live (${((Date.now() - start) / HOUR).toFixed(1)} hrs so far)` : `${fmt(start)} – live (est. ${((end - start) / HOUR).toFixed(1)} hrs)`];
              }

              const hours = ((end - start) / HOUR).toFixed(1);
              return [s.title, `${fmt(start)} – ${fmt(end)} (${hours} hrs)`];
            },
          },
        },
        zoom: {
          pan: { enabled: true, mode: "x" },
          zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: "x" },
          limits: { x: { min: fullMin, max: fullMax, minRange: 6 * HOUR } },
        },
        annotation: {
          annotations: {
            line1: {
              type: "line",
              // scaleID: "x",
              xMin: NOW,
              xMax: NOW,
              // value: now(),
              borderColor: "rgb(255, 99, 132)",
              borderWidth: 2,
            },
          },
        },
      },
      onClick(event, elements) {
        if (!elements.length) return;
        const { url } = streams[elements[0].index];
        if (url && url !== "#") window.open(url, "_blank", "noopener");
      },
      onHover(event, elements) {
        canvas.style.cursor = elements.length ? "pointer" : "grab";
        // canvas.style.cursor = elements.length ? "pointer" : "default";
      },
    },
  });

  canvas.addEventListener("pointerdown", () => {
    if (canvas.style.cursor === "grab") canvas.style.cursor = "grabbing";
  });
  window.addEventListener("pointerup", () => {
    if (canvas.style.cursor === "grabbing") canvas.style.cursor = "grab";
  });
  document.fonts.ready.then(() => chart.update());
  setInterval(() => {
    const now = Date.now();
    streams.forEach((s, i) => {
      if (s.end === "LIVE") chart.data.datasets[0].data[i].x = [t(s.start), endOf(s)];
    });
    const line = chart.options.plugins.annotation.annotations.line1;
    line.xMin = line.xMax = now;
    chart.update("none");
  }, 60000);
}
main().catch((err) => {
  console.error(err);
  document.getElementById("wrap").insertAdjacentHTML("beforeend", "<p>Couldn't load stream data.</p>");
});

const palette = {
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
const streamColor = { "Gale Galleon": "gale", "Cassian Floros": "cassian", "Lucien Lunaris": "lucien", "Zander Netherbrand": "zander", "Rosco Graves": "rosco", "Malim Cendari": "malim", "Altus Zendoji": "altus", "Ryzar Blazenfang": "ryzar", "Nayuta Umbrage": "nayuta", Ashkariel: "ashkariel", "Shiki Katagami": "shiki", "Liron Lockheart": "liron", "Caelen Strayfe": "caelen", "Elias Delborne": "elias", "Nimue Eversea": "nimue", "Saeir Alarie": "saeir", "Solan Fernwick": "solan", "Varis Hemlock": "varis", "Aurel Ophidia": "aurel" };
const fallback = { bg: "oklch(0.6178 0.2054 267.56 / 0.5)", hover: "oklch(0.6178 0.2054 267.56 / 0.8)" };
const colorOf = (s) => palette[streamColor[s.label]] ?? fallback;

const streams = [
  { label: "Zander Netherbrand", title: "OUR JOURNEY BEGINS | First Stage Fables", start: "2026-10-10T16:04:51Z", end: "2026-10-11T03:50:29Z", url: "https://www.youtube.com/watch?v=cmfB7oECmUE" },
  { label: "Ryzar Blazenfang", title: "#FSFables DAY 0 // the paladin's expedition begins. 🏕️", start: "2026-10-10T16:05:03Z", end: "2026-10-10T20:23:02Z", url: "https://www.youtube.com/watch?v=kpPnVUvbAzc" },
  { label: "Cassian Floros", title: "Corvin Fareth gets sent to the mortal realm!【#FSFables - Day 1】", start: "2026-10-10T16:06:03Z", end: "2026-10-10T23:38:54Z", url: "https://www.youtube.com/watch?v=nEmLm3E3PY4" },
  { label: "Nayuta Umbrage", title: "【#FSFables】#1 I Will Find You...【Nayuta Umbrage | FIRST STAGE PRODUCTION EN】", start: "2026-10-10T16:30:15Z", end: "2026-10-10T20:01:14Z", url: "https://www.youtube.com/watch?v=PsmqqQEpQkc" },
  { label: "Altus Zendoji", title: "【 #FSFables 】DAY 1 - Never Fear! For I am Hyr!", start: "2026-10-10T16:30:30Z", end: "2026-10-11T02:01:39Z", url: "https://www.youtube.com/watch?v=eEa8ZGn8058" },
  { label: "Malim Cendari", title: "【#FSFables 01】You can always ask me for help! I'm probably around anyway 👁️", start: "2026-10-10T16:31:03Z", end: "2026-10-11T03:54:43Z", url: "https://www.youtube.com/watch?v=rpFjGX6yBQ4" },
  { label: "Nimue Eversea", title: "【#FSFables | Day 1】Nymfue Yverhym -  Nimue Eversea【FIRST STAGE PRODUCTION EN】", start: "2026-10-10T16:31:35Z", end: "2026-10-10T22:31:40Z", url: "https://www.youtube.com/watch?v=bhn-5OBJmUs" },
  { label: "Aurel Ophidia", title: "【#FSFABLES】The Beginning of Auren Zoltarys!【FIRST STAGE PRODUCTION EN】", start: "2026-10-10T16:32:19Z", end: "2026-10-11T02:04:28Z", url: "https://www.youtube.com/watch?v=Yk-W6FWJrio" },
  { label: "Rosco Graves", title: "【#FSFables | Day 1】Let the story begin~", start: "2026-10-10T16:35:04Z", end: "2026-10-11T03:38:13Z", url: "https://www.youtube.com/watch?v=nFyv8QHf00k" },
  { label: "Liron Lockheart", title: "FSFABLES DAY #1【FIRST STAGE PRODUCTION EN】", start: "2026-10-10T16:40:10Z", end: "2026-10-10T19:36:06Z", url: "https://www.youtube.com/watch?v=ZWKzw8AVEWk" },
  { label: "Varis Hemlock", title: "【Minecraft | #FSFables】 Harris Valmrock, reporting for duty. 【FIRST STAGE PRODUCTION EN】", start: "2026-10-10T16:40:25Z", end: "2026-10-11T03:48:35Z", url: "https://www.youtube.com/watch?v=7SWaXwe1BEc" },
  { label: "Gale Galleon", title: "[#FSFABLES] GACK THE WARLOCK TAKES TO THE NIGHT", start: "2026-10-10T16:44:52Z", end: "2026-10-11T03:54:11Z", url: "https://www.youtube.com/watch?v=NxJLy2DgUhM" },
  { label: "Solan Fernwick", title: "【#FSFables】Day 1 - Selwynn Fennwake's Adventure Begins!!【FIRST STAGE PRODUCTION EN】", start: "2026-10-10T16:50:31Z", end: "2026-10-10T21:54:01Z", url: "https://www.youtube.com/watch?v=T0ew_BLDnfg" },
  { label: "Elias Delborne", title: "【#FSFables - Day 1】My name is Silas DC Reborne...🧟", start: "2026-10-10T16:54:52Z", end: "2026-10-10T20:54:47Z", url: "https://www.youtube.com/watch?v=qHmbKLGqBI8" },
  { label: "Saeir Alarie", title: "【MINECRAFT】#FSFables begins!  | Saeir Alarie【FIRST STAGE PRODUCTION EN】", start: "2026-10-10T16:56:52Z", end: "2026-10-11T04:48:18Z", url: "https://www.youtube.com/watch?v=msY871rF4wQ" },
  { label: "Shiki Katagami", title: "【FSFABLES】And so our journey begins!!!!【FIRST STAGE PRODUCTION EN】", start: "2026-10-10T17:01:23Z", end: "2026-10-10T19:39:43Z", url: "https://www.youtube.com/watch?v=-Oxg9OmJqU4" },
  { label: "Ashkariel", title: "【#FSFABLES - DAY 1】 Arver Clearhands' Adventure BEGINS! ✨ 【FIRST STAGE PRODUCTION EN】", start: "2026-10-10T17:01:23Z", end: "2026-10-10T22:35:06Z", url: "https://www.youtube.com/watch?v=qXlq5lhM6t4" },
  { label: "Lucien Lunaris", title: "#FSFABLES EPISODE 1 - The Arbiter", start: "2026-10-11T00:01:17Z", end: "2026-10-11T04:32:21Z", url: "https://www.youtube.com/watch?v=7yaRCm_8Jb0" },
  { label: "Ryzar Blazenfang", title: "#FSFables DAY 1 // a moment of settling. 🏕️", start: "2026-10-11T05:34:01Z", end: "2026-10-11T11:45:47Z", url: "https://www.youtube.com/watch?v=ckyOwfAXAHw" },
  { label: "Altus Zendoji", title: "【 #FSFables 】DAY 1.5 - Hyr We Go Again!", start: "2026-10-11T12:05:41Z", end: "2026-10-11T15:51:59Z", url: "https://www.youtube.com/watch?v=S7wlboto--o" },
  { label: "Zander Netherbrand", title: "Day 2: A Darker Shade of Blood | First Stage Fables", start: "2026-10-11T12:34:52Z", end: "2026-10-12T00:49:23Z", url: "https://www.youtube.com/watch?v=oPWUATg5NGo" },
  { label: "Ryzar Blazenfang", title: "#FSFables DAY 1-2 // facta, non verba. ⛰️", start: "2026-10-11T14:01:10Z", end: "2026-10-11T19:54:35Z", url: "https://www.youtube.com/watch?v=4E2kUK5rfHQ" },
  { label: "Liron Lockheart", title: "【#FSFables | Day 2】- Drenken Jaeger", start: "2026-10-11T16:08:57Z", end: "2026-10-11T21:03:04Z", url: "https://www.youtube.com/watch?v=x2PVEOD87Ng" },
  { label: "Varis Hemlock", title: "【Minecraft | #FSFables】 Harris Valmrock, reporting for duty. 【FIRST STAGE PRODUCTION EN】", start: "2026-10-11T16:55:47Z", end: "2026-10-12T04:00:01Z", url: "https://www.youtube.com/watch?v=9SDnOluk84Q" },
  { label: "Gale Galleon", title: "[#FSFABLES] Beware the things that Gack in the night", start: "2026-10-11T19:00:09Z", end: "2026-10-12T01:12:27Z", url: "https://www.youtube.com/watch?v=vtLFBfE16KI" },
  { label: "Saeir Alarie", title: "【MINECRAFT】#FSFables Day 2: Comfy mining!  | Saeir Alarie【FIRST STAGE PRODUCTION EN】", start: "2026-10-11T21:56:14Z", end: "2026-10-12T04:53:39Z", url: "https://www.youtube.com/watch?v=ms1WNngFHZc" },
  { label: "Altus Zendoji", title: "【 #FSFables 】DAY 2 - Hyr to Answer Your Prayers!", start: "2026-10-11T23:00:16Z", end: "2026-10-12T07:13:09Z", url: "https://www.youtube.com/watch?v=2otKrg80Rgw" },
  { label: "Elias Delborne", title: "【#FSFables - Day 2】How is a zombie supposed to survive in this world...", start: "2026-10-11T23:04:39Z", end: "2026-10-12T03:28:07Z", url: "https://www.youtube.com/watch?v=OJKp05lIeHQ" },
  { label: "Nayuta Umbrage", title: "【#FSFables】#2 Let Me Guide You【Nayuta Umbrage | FIRST STAGE PRODUCTION EN】", start: "2026-10-12T00:01:32Z", end: "2026-10-12T06:12:17Z", url: "https://www.youtube.com/watch?v=CwgH37hE3So" },
  { label: "Rosco Graves", title: "【#FSFables | Day 2】Searching for some entertainment", start: "2026-10-12T00:04:42Z", end: "2026-10-12T07:48:01Z", url: "https://www.youtube.com/watch?v=uXmsXngyLiM" },
  { label: "Lucien Lunaris", title: "#FSFABLES EPISODE 2 - Knowledge - (BIG Announcement at the end)", start: "2026-10-12T00:05:05Z", end: "2026-10-12T06:05:40Z", url: "https://www.youtube.com/watch?v=6TlvBpAH2JA" },
  { label: "Nimue Eversea", title: "【#FSFables | Day 2】Nymfue Yverhym -  Nimue Eversea【FIRST STAGE PRODUCTION EN】", start: "2026-10-12T01:52:11Z", end: "2026-10-12T05:26:43Z", url: "https://www.youtube.com/watch?v=_O_NEK1HbGQ" },
  { label: "Aurel Ophidia", title: "【#FSFABLES | Day 2】Auren is HEALING!【FIRST STAGE PRODUCTION EN】", start: "2026-10-12T02:01:09Z", end: "2026-10-12T08:42:44Z", url: "https://www.youtube.com/watch?v=QNtMRmGOeG4" },
  { label: "Ashkariel", title: " 【#FSFABLES - DAY 2】 The Adventure Continues~! ✨ 【FIRST STAGE PRODUCTION EN】 ", start: "2026-10-12T03:01:00Z", end: "2026-10-12T07:26:03Z", url: "#" },
  { label: "Liron Lockheart", title: "【#FSFables | Day 2.5】- THE VOID BLOSSOM", start: "2026-10-12T03:02:37Z", end: "2026-10-12T06:19:23Z", url: "https://www.youtube.com/watch?v=Ph-Efsq-kCU" },
  { label: "Caelen Strayfe", title: "【Minecraft | #FSFables】Day 1 | It's time for Alden to join the expedition【FIRST STAGE PRODUCTION EN】", start: "2026-10-12T06:10:05Z", end: "2026-10-12T13:22:15Z", url: "https://www.youtube.com/watch?v=P65LH1hSbcs" },
  { label: "Ryzar Blazenfang", title: "#FSFables DAY 2.5-3 // let's work on a tavern together. 🍻", start: "2026-10-12T09:58:12Z", end: "2026-10-12T20:48:30Z", url: "https://www.youtube.com/watch?v=gYyh8KuLtgI" },
  { label: "Solan Fernwick", title: "【#FSFables】Day 2 - Another Day of FSFables!!【FIRST STAGE PRODUCTION EN】", start: "2026-10-12T10:56:30Z", end: "2026-10-12T15:47:15Z", url: "https://www.youtube.com/watch?v=GBaqARTamH4" },
  { label: "Cassian Floros", title: "The Wall has made friends!【#FSFables - Day 2】", start: "2026-10-12T11:01:26Z", end: "2026-10-12T16:07:26Z", url: "https://www.youtube.com/watch?v=zBOnCQx-isY" },
  { label: "Altus Zendoji", title: "【 #FSFables 】DAY 2.5 - Hyr Comes our Building Arc!", start: "2026-10-12T11:01:54Z", end: "2026-10-12T16:08:51Z", url: "https://www.youtube.com/watch?v=8jsBsqbrVtE" },
  { label: "Nimue Eversea", title: "【#FSFables | Day 2.5】Nymfue Yverhym -  Nimue Eversea【FIRST STAGE PRODUCTION EN】", start: "2026-10-12T11:06:03Z", end: "2026-10-12T14:51:54Z", url: "https://www.youtube.com/watch?v=fUhxE7na_d0" },
  { label: "Ashkariel", title: "【#FSFABLES - DAY 3】 Tiny Little Guy, Tiny Little Adventures~ 【FIRST STAGE PRODUCTION EN】", start: "2026-10-12T15:01:19Z", end: "2026-10-12T21:05:49Z", url: "https://www.youtube.com/watch?v=Z_gXeRJt8vM" },
  { label: "Gale Galleon", title: "[#FSFABLES] THE PUMPKINS SHALL RULE ALL!", start: "2026-10-12T15:57:20Z", end: "2026-10-13T01:57:42Z", url: "https://www.youtube.com/watch?v=sMFhZI42D3I" },
  { label: "Aurel Ophidia", title: "【#FSFABLES | Day 3】ONE MONTH OF SONTARIS!?【FIRST STAGE PRODUCTION EN】", start: "2026-10-12T17:01:42Z", end: "2026-10-12T20:42:56Z", url: "https://www.youtube.com/watch?v=frd4L25yQPU" },
  { label: "Varis Hemlock", title: "【Minecraft | #FSFables】 Laying foundations for Town Hall 【FIRST STAGE PRODUCTION EN】", start: "2026-10-12T19:26:09Z", end: "2026-10-12T22:37:53Z", url: "https://www.youtube.com/watch?v=X-3j0dTIwhw" },
  { label: "Cassian Floros", title: "Corvin has a new objective!【#FSFables - Day 2.5】", start: "2026-10-12T20:31:23Z", end: "2026-10-13T01:26:08Z", url: "https://www.youtube.com/watch?v=qTiDq88WPd0" },
  { label: "Saeir Alarie", title: "【MINECRAFT】#FSFables Day 3: Moo  | Saeir Alarie【FIRST STAGE PRODUCTION EN】", start: "2026-10-12T21:55:08Z", end: "LIVE", url: "https://www.youtube.com/watch?v=mC49ue4mrck" },
  { label: "Altus Zendoji", title: "【 #FSFables 】DAY 3 - Hyr, There and Everywhere!", start: "2026-10-12T23:01:01Z", end: "LIVE", url: "https://www.youtube.com/watch?v=r4XDX7pOEaw" },
  { label: "Rosco Graves", title: "【#FSFables | Day 3】Time to pull some strings~", start: "2026-10-13T01:04:58Z", end: "LIVE", url: "https://www.youtube.com/watch?v=c0XqRsVUYow" },
  { label: "Malim Cendari", title: "【#FSFables 02】Research, Observation, Expedition!", start: "2026-10-13T01:13:10Z", end: "LIVE", url: "https://www.youtube.com/watch?v=4UsaOmFbDEo" },
  { label: "Nayuta Umbrage", title: "【#FSFables】#3 How to Become Stronger【Nayuta Umbrage | FIRST STAGE PRODUCTION EN】", start: "2026-10-13T02:11:09Z", end: "LIVE", url: "https://www.youtube.com/watch?v=xiAEIJHGD7E" },
  { label: "Ryzar Blazenfang", title: "#FSFables DAY 3.5 // let's work on a tavern together. 🍻", start: "2026-10-13T03:47:57Z", end: "LIVE", url: "https://www.youtube.com/watch?v=zlxx6t9hDQc" },
];
//   const uniqueStreams = Array.from(new Map(streams.map((stream) => [stream.id, stream])).values());

const labels = ["Gale Galleon", "Cassian Floros", "Lucien Lunaris", "Zander Netherbrand", "Rosco Graves", "Malim Cendari", "Altus Zendoji", "Ryzar Blazenfang", "Nayuta Umbrage", "Ashkariel", "Shiki Katagami", "Liron Lockheart", "Caelen Strayfe", "Elias Delborne", "Nimue Eversea", "Saeir Alarie", "Solan Fernwick", "Varis Hemlock", "Aurel Ophidia"];
console.log(); //   console.log(data);

const t = (d) => new Date(d).getTime();
const fmt = (ms) => new Date(ms).toLocaleTimeString([], { hour: "numeric", minute: "2-digit", timeZoneName: "short" });
const startOfLocalDay = (ms) => {
  const d = new Date(ms);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

const fullMin = startOfLocalDay(t("2026-10-10T15:00Z"));
const fullMax = startOfLocalDay(t("2026-10-24T08:00Z")) + 24 * 3600000;
const NOW = new Date();
const NOWMS = NOW.getTime();
const DAY = 24 * 3600000;

const canvas = document.getElementById("c");

new Chart(canvas, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        data: streams.map((s) => ({ x: [t(s.start), s.end === "LIVE" ? Date.now() : t(s.end)], y: s.label })),
        backgroundColor: streams.map((s) => colorOf(s).bg),
        hoverBackgroundColor: streams.map((s) => colorOf(s).hover),
        borderSkipped: false,
      },
    ],
  },
  options: {
    indexAxis: "y",

    scales: {
      x: {
        type: "time",
        min: Math.max(fullMin, NOW - 3 * DAY), // initial view: most recent 3 days or min whichever matches scale
        max: NOW.getTime() + 2 * 1800000,
        afterBuildTicks(scale) {
          const ticks = [];
          const d = new Date(scale.min);
          d.setHours(0, 0, 0, 0); // start from local midnight so ticks stay on 12 AM/6 AM/12 PM/6 PM while panning
          while (d.getTime() <= scale.max) {
            if (d.getTime() >= scale.min) ticks.push({ value: d.getTime() });
            d.setHours(d.getHours() + 3);
          }
          scale.ticks = ticks;
        },
        ticks: {
          maxRotation: 0,
          callback(value) {
            const d = new Date(value);
            const time = d.toLocaleTimeString([], { hour: "numeric" });
            // Midnight tick gets the localized date on a second line
            return d.getHours() === 0 ? [time, d.toLocaleDateString([], { month: "short", day: "numeric" })] : time;
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
            const hours = ((end - start) / 3600000).toFixed(1);
            return [s.title, `${fmt(start)} – ${fmt(end)} (${hours} hrs)`];
          },
        },
      },
      zoom: {
        pan: { enabled: true, mode: "x" },
        zoom: { wheel: { enabled: true }, pinch: { enabled: true }, mode: "x" },
        limits: { x: { min: fullMin, max: fullMax, minRange: 6 * 3600000 } },
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            // scaleID: "x",
            xMin: NOW,
            xMax: NOW,
            mode: "vertical",
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
      canvas.style.cursor = elements.length ? "pointer" : "default";
    },
  },
});

setInterval(() => {
  const now = Date.now();
  streams.forEach((s, i) => {
    if (s.end === "LIVE") chart.data.datasets[0].data[i].x = [t(s.start), now];
  });
  const line = chart.options.plugins.annotation.annotations.line1;
  line.xMin = line.xMax = now;
  chart.update("none");
}, 60000);

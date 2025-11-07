import React from 'react';

const ellipsesData = [
  { cy: 3, rx: 17, ry: 4, begin: "0s" },
  { cy: 6, rx: 23.748684174075834, ry: 4.4, begin: "-0.2s" },
  { cy: 10, rx: 30, ry: 4.84, begin: "-0.4s" },
  { cy: 14, rx: 34.698703145794944, ry: 5.324, begin: "-0.6s" },
  { cy: 18, rx: 38.4187454245971, ry: 5.8564, begin: "-0.8s" },
  { cy: 22, rx: 41.42463035441595, ry: 6.44204, begin: "-1s" },
  { cy: 26, rx: 43.86342439892262, ry: 7.086244, begin: "-1.2s" },
  { cy: 30, rx: 45.8257569495584, ry: 7.7948684, begin: "-1.4s" },
  { cy: 34, rx: 47.37087712930805, ry: 8.57435524, begin: "-1.6s" },
  { cy: 38, rx: 48.53864439804639, ry: 9.431790764, begin: "-1.8s" },
  { cy: 42, rx: 49.35585071701226, ry: 10.3749698404, begin: "-2s" },
  { cy: 46, rx: 49.83974317750845, ry: 11.41246682444, begin: "-2.2s" },
  { cy: 50, rx: 50, ry: 12.553713506884012, begin: "-2.4s" },
  { cy: 54, rx: 49.83974317750845, ry: 11.41246682444, begin: "-2.6s" },
  { cy: 58, rx: 49.35585071701227, ry: 10.3749698404, begin: "-2.8s" },
  { cy: 62, rx: 48.53864439804639, ry: 9.431790764, begin: "-3s" },
  { cy: 66, rx: 47.37087712930804, ry: 8.57435524, begin: "-3.2s" },
  { cy: 70, rx: 45.825756949558404, ry: 7.7948684, begin: "-3.4s" },
  { cy: 74, rx: 43.86342439892262, ry: 7.086244, begin: "-3.6s" },
  { cy: 78, rx: 41.42463035441595, ry: 6.44204, begin: "-3.8s" },
  { cy: 82, rx: 38.4187454245971, ry: 5.8564, begin: "-4s" },
  { cy: 86, rx: 34.698703145794944, ry: 5.324, begin: "-4.2s" },
  { cy: 90, rx: 30, ry: 4.84, begin: "-4.4s" },
  { cy: 94, rx: 23.74868417407584, ry: 4.4, begin: "-4.6s" },
  { cy: 96.75, rx: 18, ry: 3.5, begin: "-4.8s" },
];

const ThemeEvolution = () => {
  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
        {/* <h2 className="text-2xl font-bold text-center text-cyan-400 mb-6 font-orbitron">
  
        </h2> */}
        
        <div className="mb-6">
          <svg 
            viewBox="-5 -5 110 110" 
            strokeWidth="0" 
            className="w-full h-auto max-w-full mx-auto"
            style={{ 
              aspectRatio: '1 / 1', 
              filter: 'drop-shadow(0 0 12px rgb(6, 182, 212, 0.8))' 
            }}
          >
            <g 
              fill="none" 
              id="sphere" 
              transform="rotate(135 50 50)" 
              strokeWidth="0" 
              stroke="rgb(6, 182, 212)" 
            >
              {ellipsesData.map((data, index) => (
                <ellipse 
                  key={index} 
                  cx="50" 
                  cy={data.cy} 
                  rx={data.rx} 
                  ry={data.ry}
                >
                  <animate 
                    attributeName="stroke-width" 
                    values="0.1;1.5;0.1" 
                    dur="5s" 
                    begin={data.begin} 
                    repeatCount="indefinite" 
                    keyTimes="0;0.5;1" 
                    keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" 
                    calcMode="spline"
                  />
                  
                  <animateTransform 
                    attributeName="transform" 
                    type="translate" 
                    values="0 0; 0 -5; 0 0" 
                    dur="5s" 
                    begin={data.begin} 
                    repeatCount="indefinite" 
                    keyTimes="0;0.5;1" 
                    keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" 
                    calcMode="spline"
                  />
                </ellipse>
              ))}
            </g>
          </svg>
        </div>

        <div className="space-y-4 text-gray-300">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">NOVA - The Spark of Tomorrow</h3>
            <p className="text-sm leading-relaxed">
              Each year, Technika evolves with a new theme that represents the cutting edge of technology and innovation. 
              This pulsating energy sphere symbolizes the continuous evolution and growth of our tech community.
            </p>
          </div>
          </div>
        </div>
      </div>
  );
};

export default ThemeEvolution;

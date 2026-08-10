import Image from "next/image";

interface StepperBarProps {
  currentStep: number;
  totalSteps?: number;
}

const STEP_LABELS = [
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
];

// Progress fill widths as % of stepper bar for each active step
const PROGRESS_WIDTHS = ["4.7%", "19.2%", "37.4%", "55.7%", "75.2%", "89.8%"];

export default function StepperBar({
  currentStep,
  totalSteps = 6,
}: StepperBarProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative">
        {/* Background track */}
        <div className="absolute top-4 left-4 right-4 h-1 bg-[#e9edff] rounded-full" />
        {/* Active progress fill */}
        <div
          className="absolute top-4 left-4 h-1 bg-[#004ac6] rounded-full transition-all duration-500"
          style={{ width: `calc(${PROGRESS_WIDTHS[currentStep - 1]} * (100% - 2rem) / 100% + 1rem)` }}
        />
        {/* Step circles */}
        <div className="relative flex justify-between">
          {Array.from({ length: totalSteps }).map((_, i) => {
            const stepNum = i + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;

            return (
              <div key={stepNum} className="flex flex-col items-center gap-1">
                {/* Circle */}
                {isCompleted ? (
                  <div className="w-8 h-8 rounded-full bg-[#004ac6] flex items-center justify-center z-10">
                    <Image
                      src="/assets/check.svg"
                      alt="completed"
                      width={13}
                      height={9}
                    />
                  </div>
                ) : isCurrent ? (
                  <div className="w-11 h-11 rounded-full border-4 border-[#004ac6] bg-[#f9f9ff] flex items-center justify-center z-10 shadow-md -mt-1.5">
                    <span className="text-[#004ac6] font-bold text-base">
                      {stepNum}
                    </span>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#e9edff] flex items-center justify-center z-10">
                    <span className="text-[#737686] font-bold text-sm">
                      {stepNum}
                    </span>
                  </div>
                )}
                {/* Label */}
                <span
                  className={`text-sm ${
                    isCompleted || isCurrent
                      ? "text-[#004ac6]"
                      : "text-[#475569]"
                  }`}
                >
                  {STEP_LABELS[i]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

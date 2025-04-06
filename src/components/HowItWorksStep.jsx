function HowItWorksStep({ step, title }) {
    return (
      <div className="border p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <span className="text-xl">{step}.</span>
          <h4 className="font-medium text-base">{title}</h4>
        </div>
      </div>
    );
}

export default HowItWorksStep;
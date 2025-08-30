const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">P</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground">Pramiti</span>
        <span className="text-xs text-primary -mt-1">Engineering Logic</span>
      </div>
    </div>
  );
};

export default Logo;
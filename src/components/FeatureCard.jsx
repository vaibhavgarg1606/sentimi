function FeatureCard({ title, description, image }) {
    return (
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <div className="relative">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-md mb-4" />
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    );
}
  
export default FeatureCard;
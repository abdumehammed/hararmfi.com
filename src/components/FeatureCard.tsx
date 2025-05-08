// import { ReactNode } from "react";

// interface FeatureCardProps {
//     icon: ReactNode;
//     title: string;
//     description: string;
//     reverse?: boolean;
// }

// export default function FeatureCard({ icon, title, description, reverse = false }: FeatureCardProps) {
//     return (
//         <div
//             className={`rounded-2xl shadow-md overflow-hidden transition-all duration-300
//       ${reverse ? "bg-white text-gray-800 hover:bg-orange-500 hover:text-white"
//                     : "bg-orange-500 text-white hover:bg-white hover:text-gray-800"}`}
//         >
//             <div className={`p-4 text-3xl flex items-center justify-center
//         ${reverse ? "bg-orange-100 text-orange-600" : "bg-[#19294d] text-white"}`}>
//                 {icon}
//             </div>
//             <div className="p-4">
//                 <h3 className="text-lg font-semibold mb-2">{title}</h3>
//                 <p className="text-sm leading-relaxed">{description}</p>
//             </div>
//         </div>
//     );
// }

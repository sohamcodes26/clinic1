import Image from 'next/image';
import Link from 'next/link';

export default function DoctorCard({ doctor }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group border border-secondary/20">
            <div className="aspect-[4/5] relative overflow-hidden bg-secondary/30">
                <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-2xl font-bold">{doctor.name}</h3>
                    <p className="text-white/90 text-sm font-medium">{doctor.designation}</p>
                </div>
            </div>
            <div className="p-6">
                <ul className="space-y-3 mb-6">
                    {doctor.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex items-start text-sm text-foreground/80">
                            <span className="text-primary mr-2 font-bold mt-0.5">•</span>
                            <span>{qual}</span>
                        </li>
                    ))}
                </ul>
                <Link
                    href="#contact"
                    className="inline-block w-full text-center py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                >
                    Consult Now
                </Link>
            </div>
        </div>
    );
}

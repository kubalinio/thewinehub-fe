import ChoosenFillters from '@/features/public/bikes/containers/ChoosenFillters';
import FilterLayout from '@/features/public/shared/layouts/containers/FilterLayout';
import BikePhoto from '@/features/public/bikes/assets/DomaneSL6_21_28313_C_Portrait.webp'
import TopViewBikes from '@/features/public/bikes/containers/TopViewBikes';
import Feedback from '@/features/public/bikes/containers/Feedback';

export interface BikeData {
  id: string,
  bikeName: string;
  manufacturer: string;
  modelYear: number;
  frameMaterial: string;
  frameSize: string;
  image: any;
  color: string;
  weight: string;
  price: number;
  components: {
    groupset: string;
    brakes: string;
    wheelset: string;
    tires: string;
    saddle: string;
    handlebar: string;
    stem: string;
  };
  features: string[];
}

interface BikeComponent {
  groupset: string;
  brakes: string;
  wheelset: string;
  tires: string;
  saddle: string;
  handlebar: string;
  stem: string;
}

interface BikeFeatures {
  features: string[];
}

const bikeData: BikeData[] = [{
  id: "1",
  bikeName: "Trek Domane SL 6",
  manufacturer: "Trek",
  modelYear: 2023,
  frameMaterial: "OCLV Carbon",
  frameSize: "56cm",
  image: BikePhoto,
  color: "Matte Dnister Black",
  weight: "8.2 kg",
  price: 2999.99,
  components: {
    groupset: "Shimano Ultegra R8000",
    brakes: "Shimano Ultegra R8000",
    wheelset: "Bontrager Paradigm Comp",
    tires: "Bontrager R3 Hard-Case Lite, 700x25c",
    saddle: "Bontrager Montrose Elite",
    handlebar: "Bontrager Pro IsoCore VR-CF",
    stem: "Bontrager Pro, 90mm"
  },
  features: [
    "IsoSpeed decoupler for a smoother ride",
    "Endurance geometry for all-day comfort",
    "Front and rear IsoCore handlebar and seatpost for vibration dampening",
    "Compatible with Bontrager Blendr accessories",
    "Internal cable routing for a clean look",
    "Shimano Ultegra R8000 11-speed drivetrain",
    "Disc brakes for consistent stopping power",
    "Thru-axles for enhanced stiffness and control",
    "Bontrager Paradigm Comp tubeless-ready wheelset",
    "Trek's H2 fit for a balance of performance and comfort",
    "Front and rear fender mounts for versatility",
    "Weight-saving carbon components for a lightweight build",
    "Comprehensive lifetime warranty from Trek",
    "Pedals: Not included",
    "Crankset: Shimano Ultegra R8000, 50/34T",
    "Cassette: Shimano Ultegra R8000, 11-34T",
    "Front Derailleur: Shimano Ultegra R8000",
    "Rear Derailleur: Shimano Ultegra R8000",
    "Handlebar Tape: Bontrager Supertack Perf",
    "Seatpost: Bontrager carbon seatmast cap"
  ]
}];


export default async function Page() {

  return (
    <FilterLayout>
      <TopViewBikes bikes={bikeData} />
      <TopViewBikes bikes={bikeData} />
      <Feedback />
    </FilterLayout>
  );
}

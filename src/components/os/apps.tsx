import type { AppId } from "@/lib/archive";
import {
  MapApp,
  PhotosApp,
  ReasonsApp,
  ReplayApp,
  SecretsApp,
  TimelineApp,
} from "@/components/os/apps-memory";
import {
  CouponsApp,
  DictionaryApp,
  FortuneApp,
  LetterApp,
  ScratchApp,
  StatsApp,
  WeatherApp,
} from "@/components/os/apps-now";
import {
  AchievementsApp,
  BirthdayApp,
  CapsulesApp,
  HiddenApp,
  PlansApp,
  RandomApp,
  WishesApp,
} from "@/components/os/apps-future";

export function AppScreen({ id }: { id: AppId }) {
  switch (id) {
    case "letter":
      return <LetterApp />;
    case "timeline":
      return <TimelineApp />;
    case "photos":
      return <PhotosApp />;
    case "map":
      return <MapApp />;
    case "secrets":
      return <SecretsApp />;
    case "reasons":
      return <ReasonsApp />;
    case "replay":
      return <ReplayApp />;
    case "stats":
      return <StatsApp />;
    case "weather":
      return <WeatherApp />;
    case "dictionary":
      return <DictionaryApp />;
    case "coupons":
      return <CouponsApp />;
    case "scratch":
      return <ScratchApp />;
    case "fortune":
      return <FortuneApp />;
    case "achievements":
      return <AchievementsApp />;
    case "plans":
      return <PlansApp />;
    case "capsules":
      return <CapsulesApp />;
    case "wishes":
      return <WishesApp />;
    case "birthday":
      return <BirthdayApp />;
    case "random":
      return <RandomApp />;
    case "hidden":
      return <HiddenApp />;
    default:
      return null;
  }
}

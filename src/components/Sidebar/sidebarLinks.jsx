import {
  BanknotesIcon,
  BuildingLibraryIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

export const sidebarLinks = [
  {
    title: "Budget",
    icon: <BanknotesIcon />,
    path: "/#",
  },
  {
    title: "Reports",
    icon: <PresentationChartBarIcon />,
    path: "/reports",
  },
  {
    title: "Accounts",
    icon: <BuildingLibraryIcon />,
    path: "/accounts",
  },
];

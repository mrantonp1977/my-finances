import { LayoutGrid, PiggyBank, ReceiptText, Settings2, ShieldCheck } from "lucide-react";




export const routes = [
  {
    
    label: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
    color: "text-amber-400"
  },
  {
    id: 2,
    label: "Budgets",
    icon: PiggyBank,
    href: "/dashboard/budgets",
    color: "text-amber-400"
  },
  {
    id: 3,
    label: "Expences",
    icon: ReceiptText,
    href: "/dashboard/expences",
    color: "text-amber-400"
  },
  {
    id: 4,
    label: "Upgrade",
    icon: ShieldCheck,
    href: "/dashboard/upgrade",
    color: "text-amber-400"
  },
  {
    id: 5,
    label: "Settings",
    icon: Settings2,
    href: "/dashboard/settings",
    color: "text-amber-400"
  },
]
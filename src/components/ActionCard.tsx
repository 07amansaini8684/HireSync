import { QuickActionType } from "@/constants";
import { Card } from "./ui/card";

function ActionCard({ action, onClick }: { action: QuickActionType; onClick: () => void }) {
  return (
    <Card
      key={action.title}
      className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div>
          {/* ACTION ICON */}
          <action.icon className={`h-10 w-10 text-${action.color} dark:text-${action.color}-400 mb-4`} />

          {/* ACTION DETAILS */}
          <p className="text-sm text-muted-foreground">{action.title}</p>
          <p className="text-2xl font-bold mt-1">{action.description}</p>
        </div>
      </div>
    </Card>
  );
}

export default ActionCard;
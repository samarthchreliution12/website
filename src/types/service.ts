export interface ServiceModule {
  id: string;
  title: string;
  subtitle: string;
  iconUrl: string;
  desc: string;
  angle: number;
}

export interface ConsultingBenefit {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface AiBenefit {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkflowNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface MobileScreen {
  title: string;
  screen: string;
  metric: string;
  badge: string;
}

export interface SoftwareLayer {
  layer: string;
  items: string[];
  color: string;
}

export interface PipelineStep {
  step: string;
  name: string;
  status: string;
  color: string;
}

export interface ServiceStoryItem {
  id: string;
  num: string;
  title: string;
  badge: string;
  glow?: string;
}

import { cn } from '@/lib/utils';
import { Styles } from '@/theme';

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}

export const SkeletonWrapper = (props: { stylesOverride: string }) => {
  const { stylesOverride } = props;
  return (
    <div className={cn(Styles.FLEX_COL, 'space-y-2 w-full', stylesOverride)}>
      <Skeleton className="h-[125px] rounded-xl w-full" />
    </div>
  );
};

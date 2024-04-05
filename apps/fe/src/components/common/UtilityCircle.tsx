export const UtilityCircle = (props: { name: string; icon: any }) => {
  const { name, icon } = props;
  return (
    <div>
      {icon}
      <p className="text-center">{name}</p>
    </div>
  );
};

export default function MyPageTitle({
  title,
  content,
}: {
  title: string;
  content?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-black text-notification-h1">{title}</span>
      <span className="text-h4 text-gray-07">{content}</span>
    </div>
  );
}

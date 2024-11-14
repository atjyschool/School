import { useTranslations } from "next-intl";

const Announcements = () => {
  const t = useTranslations("Announcements");

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{t("Announcements")}</h1>
        <span className="text-xs text-gray-400 cursor-pointer">{t("View All")}</span>
      </div>
      <div className="flex flex-col gap-4 mt-4 max-h-[400px] overflow-y-auto">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">12月放假通知</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-11-14
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">12月放假通知详细情况</p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">12月学生活动安排</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-11-15
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">12月学生活动安排细则</p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">12月教师活动安排</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-11-16
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">12月教师活动安排细则</p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">12月家长活动安排</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-11-17
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">12月家长活动安排细则</p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">12月家长活动安排</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-11-17
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">12月家长活动安排细则</p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">12月家长活动安排</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-11-17
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">12月家长活动安排细则</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;

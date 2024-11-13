import Image from "next/image";
import {useTranslations} from 'next-intl';

const UserCard = ({ type }: { type: string }) => {
    const t = useTranslations('UserCards');
  return (
    <div className="rounded-2xl odd:bg-slate-600 even:bg-cyan-700 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      
      <h1 className="text-2xl font-semibold my-4 odd: text-white ">{t(type)}</h1>
      <h2 className="capitalize text-lg font-medium text-white">1,234</h2>
    </div>
  );
};

export default UserCard;
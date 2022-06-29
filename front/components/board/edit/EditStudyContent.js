/**
 * isPersonal이 true일 때는 공개스터디 선택 창이 보이지 않고
 * isPersonal이 false일 때만 공개 비공개 선택 창이 뜨게 하기
 *
 */

import { useRecoilState } from 'recoil';
import { editroomAtom } from '../../../core/atoms/createroomState';
import dayjs from 'dayjs';

const EditStudyContent = () => {
  const [room, setRoom] = useRecoilState(editroomAtom);
  const { roomName, startStudyDay, endStudyDay, focusTimeStart, focusTimeEnd } =
    room;
  dayjs.locale('ko');

  let today = dayjs().format('YYYY-MM-DD');

  const onNameChange = (e) => {
    setRoom((prev) => {
      return {
        ...prev,
        roomName: e.target.value,
      };
    });
  };

  const onEndStudyDayChange = (e) => {
    setRoom((prev) => {
      return {
        ...prev,
        endStudyDay: e.target.value,
      };
    });
  };
  const onFocusTimeStartChange = (e) => {
    setRoom((prev) => {
      return {
        ...prev,
        focusTimeStart: e.target.value + ':00',
      };
    });
  };

  const onFocusTimeEndChange = (e) => {
    setRoom((prev) => {
      return {
        ...prev,
        focusTimeEnd: e.target.value + ':00',
      };
    });
  };

  return (
    <div className="container w-full mx-auto my-5 bg-white  rounded">
      <div className="mx-auto">
        <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
          <div className="mt-3 flex flex-col w-full pb-5 border-b border-gray-300 border-dashed">
            <div className="flex gap-x-6 mb-2">
              <label
                htmlFor="name"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
                스터디 이름
              </label>
              <p className="pb-2 text-sm text-gray-800 ">
                스터디를 이름을 입력해주세요.
              </p>
            </div>
            <input
              value={roomName}
              onChange={onNameChange}
              type="text"
              id="name"
              className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 "
            />
          </div>

          <div className="mt-8 flex flex-col w-full pb-5 border-b border-gray-300 border-dashed">
            <div className="flex gap-x-6 mb-2">
              <label
                htmlFor="name"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
                스터디 기간
              </label>
              <p className="pb-2 text-sm text-gray-800 ">
                스터디 기간을 입력해주세요. 스터디 기간이 지나면 자동으로 방이
                사라집니다.
              </p>
            </div>
            <div>
              <input
                className="mr-5"
                type="date"
                min={today}
                value={startStudyDay}
                disabled
              ></input>
              ~
              <input
                className="mx-5"
                type="date"
                value={endStudyDay}
                min={startStudyDay}
                onChange={onEndStudyDayChange}
              ></input>
            </div>
          </div>
          <div className="mt-8 flex flex-col w-full">
            <div className="flex gap-x-6 mb-2">
              <label
                htmlFor="name"
                className="pb-2 text-sm font-bold text-gray-800 "
              >
                집중시간
              </label>
              <p className="pb-2 text-sm text-gray-800 ">
                스터디 집중시간을 입력해주세요.(스터디 모집시 사용됩니다.)
              </p>
            </div>
            <div>
              <input
                value={focusTimeStart}
                onChange={onFocusTimeStartChange}
                type="time"
                id="name"
                className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 mr-5 leading-8 transition-colors duration-200 ease-in-out"
              />
              ~
              <input
                value={focusTimeEnd}
                onChange={onFocusTimeEndChange}
                type="time"
                id="name"
                className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 mx-5 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudyContent;

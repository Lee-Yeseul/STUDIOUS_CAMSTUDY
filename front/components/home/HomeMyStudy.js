import React, { useEffect, useState, Component } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../core/atoms/userState';
import * as API from '../../pages/api/api';
import MyStudyRoomCard from '../../components/common/MyStudyRoomCard';
import ScrollHorizontal from 'react-scroll-horizontal';

/**
 * @component
 * @description 내 스터디룸 모음
 */
const HomeMyStudy = () => {
  const [myStudyRooms, setMyStudyRooms] = useState([]);
  const user = useRecoilValue(userAtom);

  /**
   * @description 내가 생성하거나 참여중인 스터디룸 데이터
   */
  useEffect(() => {
    async function getMyStudyRooms() {
      const res = await API.get(`studyrooms/${user?.id}`);
      const data = res.data;
      setMyStudyRooms(data);
    }
    getMyStudyRooms();
  }, []);

  return (
    <div className="mt-10 mb-20">
      <div className="px-10 md:px-15 lg:px-20 font-bold text-2xl text-gray-800">
        MY STUDY ROOM ({myStudyRooms.length})
        <div className="border-none bg-amber-400 w-20 h-1 mt-2 rounded text-xm"></div>
      </div>

      <div className="px-10 md:px-15 lg:px-20">
        <div id="scroll-horizontal" style={{ height: `25em` }}>
          {/* <ScrollHorizontal reverseScroll={true}> */}
          <ScrollContainer hideScrollbars={false}>
            <div className="h-full w-full flex flex-raw   ">
              {myStudyRooms &&
                myStudyRooms.map((myStudyRoom, index) => {
                  return (
                    <div
                      className="myStudyRoom snap-start snap-always "
                      key={index}
                    >
                      <MyStudyRoomCard myStudyRoom={myStudyRoom} />
                    </div>
                  );
                })}
              {/* 스터디룸 만들기  */}
              <div className="snap-start snap-always">
                <div className=" px-2 py-10 mx-auto sm:max-w-xl  md:px-12 lg:px-8">
                  <div className="grid gap-5 sm:max-w-sm sm:mx-auto">
                    <a href={'/studyroom/create'} aria-label="Article">
                      <div className="flex items-center justify-center bg-amber-50 h-[300px] w-[250px] rounded-xl hover:shadow-amber-300/50 shadow-lg hover:scale-105 hover:bg-white hover:border-amber-400 hover:border hover:text-amber-400">
                        <p className="font-bold text-xl"> + ROOM CREATE</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </ScrollHorizontal> */}
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
};

export default HomeMyStudy;

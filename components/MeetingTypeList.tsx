"use client"

import HomeCard from "./HomeCard"
import { useState } from "react"
import { useRouter } from "next/navigation"
import MeetingModal from "./MeetingModal"
import { useUser } from "@clerk/nextjs"
import { useStreamVideoClient } from "@stream-io/video-react-sdk"


const MeetingTypeList = () => {
  const router = useRouter ();
  const [meetingState, setmeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting'> ()
  const { user } = useUser();
  const client = useStreamVideoClient();
  const [values, setvalues] = useState({
    dataTime: new Date(),
    description:'',
    link:''
  })

  const createMeeting = async () => {
    if(!client || !user) return;

    try {
      const id =crypto.randomUUID();
      const call = client.call('default', id);

      if (!call) throw new Error('Failed to create call')
        
        const startsAt = values.dateTime.toISOString()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 ">
        <HomeCard
          img="/icons/add-meeting.svg"
          title="New Meeting"
          description="Start a new meeting"
          handleclick={() => setmeetingState('isInstantMeeting')}
          className="bg-orange-1"
        />
        <HomeCard 
          img="/icons/schedule.svg"
          title="Schedule Meeting"
          description="Plan your meeting"
          handleclick={() => setmeetingState('isScheduleMeeting')}
          className="bg-blue-1"
          />
        <HomeCard 
          img="/icons/recordings.svg"
          title="View Recordings"
          description="Check out your recordings"
          handleclick={() => setmeetingState('isJoiningMeeting')}
          className="bg-purple-1"
        />
        <HomeCard 
          img="/icons/join-meeting.svg"
          title="Join Meeting"
          description="Via invitation link"
          handleclick={() => setmeetingState('isJoiningMeeting')}
          className="bg-yellow-1"
        />
        <MeetingModal 
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setmeetingState(undefined)}
        title="start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleclick={createMeeting}
        />
    </section>
  )
}

export default MeetingTypeList
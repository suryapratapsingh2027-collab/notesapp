import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='flex h-[50%] p-7 justify-between snap-none overflow-auto items-center w-full gap-3'>
            {data.tasks.map((e, idx) => {

                if (e.active) {
                    return <AcceptTask data={e} key={idx} />
                } else if (e.completed) {
                    return <CompleteTask data={e} key={idx} />
                } else if (e.newTask) {
                    return <NewTask data={e} key={idx} />
                } else if (e.failed) {
                    return <FailedTask data={e} key={idx} />
                }
            })}
        </div>
    )
}
export default TaskList

import React, {FC, useRef, useState} from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const eventHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drop');
        setIsDrag(false);
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
         e.preventDefault();
        setIsDrag(false);
     }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }
  return (
      <div>
          <input value={value} type="text" onChange={eventHandler} placeholder='Controllable' />
          <input value={value} type="text" onChange={eventHandler} placeholder='Uncontrollable'/>
          <button onClick={clickHandler}>Text</button>
          <div onDrag={dragHandler} draggable style={{ width: '200px', height: '200px', background: 'orange' }}></div>
          <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler}
            style={{ width: '200px', height: '200px', background: isDrag ? 'blue' : 'orange', marginTop: '20px' }}></div>
    </div>
  )
}

export default EventsExample;

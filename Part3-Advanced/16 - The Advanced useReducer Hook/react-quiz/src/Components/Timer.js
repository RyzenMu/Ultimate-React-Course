import React, {useEffect} from 'react';

function Timer({dispatch, secondsRemaining}) {
    const mins = Math.floor(secondsRemaining/60);
    const seconds = secondsRemaining % 60;
    useEffect(function ()  {
        const id = setInterval(function(){
            dispatch({type:'tick'});
            return ()=> {
                clearInterval(id)
            }
        }, 1000)
    }, [dispatch]);
    return (
        <div className='timer'>{mins < 0 && '0'}{mins} : {seconds<0 && '0'}{seconds}</div>
    );
}

export default Timer;
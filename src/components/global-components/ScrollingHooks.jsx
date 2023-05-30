import { useEffect, useState } from 'react';
/**
 * useScrollingUp custom react hook
 * @returns {boolean}
 */

const useScrollingUp = () =>
{
    let prevScroll
    //if it is SSR then check you are now on the client and window object is available
    if (process.browser)
    {
        prevScroll = window.pageYOffset
    }
    const [scrollingUp, setScrollingUp] = useState(false)
    const handleScroll = () =>
    {
        const currScroll = window.pageYOffset
        const isScrolled = prevScroll > currScroll
        setScrollingUp(isScrolled)
        prevScroll = currScroll
    }
    const on= (obj, ...args)=>
    {
        obj.addEventListener(...args)
    }

    const off= (obj, ...args)=>
    {
        obj.removeEventListener(...args)
    }
    useEffect(() =>
    {
        on(window, 'scroll', handleScroll, { passive: true })
        return () =>
        {
            off(window, 'scroll', handleScroll, { passive: true })
        }
    }, [])
    return scrollingUp
}

export default useScrollingUp
import dynamic from 'next/dynamic'


const NoSsr = props = <>{props.childre}</>

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
})

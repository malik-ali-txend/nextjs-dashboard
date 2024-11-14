import Image from "next/image";
import styles from '@/app/ui/home.module.css';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
       <h1>Its workin' now</h1>
       <p className= {styles.shape}></p>
       <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAolBMVEUAAAD///+5ubnNzc3s7Ozy8vKzs7NfX1+QkJBNTU1FRUXBwcFzc3OwsLDHx8cTExOlpaWAgIA4ODjY2NgRERE/Pz8aGhri4uKYmJhZWVmSkpJxcXHS0tJsbGwqKio1NTUjIyMiEgppOB8UCwagoKCBRSauXTSIiIhTU1MvGQ5yPSJOKheXUS2jVzF6enpfMxxULRm+ZjmZUi5DJBQ0Gw9+QyW/4bTDAAAEy0lEQVR4nO3c63aiMBQF4BNQ7iCCINqqaL3jpdPa93+1CVoVUKeuWbYU2N8PhIBOuhcJJjASAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJSM38q7BgXR8vKuQVHIeVegKIxB3jUoiPlT3jUoCN/OuwZFIeC6dx8b3fl9nsy8a1AQg3beNSiKmpp3DQrCCvKuQUEoVWt7mnDl1GgKaSbJeqapqSz09ON+6bjS/JlK50JmzLgolJglJulE7Xr6EDYj7flzd419rjzPfqjWeZCZxS4KpdpFUZ/pyU3rObEhZFIsJ5l5bStbeCUp2rDNeWPGkl/Oq5LU3GHZYe61pEhg4XHVYb3Unook1aEg2/6uJkX109WulmqJlUlqzrtrMV14PSmNjQ8rQibZqiSlxt11+vp3PSl+7s3jF4OfhikVSor30KnCG0mRG0fis+zAuEpJkZtqf7eSIsYvk+2LnZVKqpFqfzeTMphhs4ubMZVKimeQKJTqM+WsqyT2MHY5+qlWUmQl2p/JakmJsfCAscsJ4YolRYn2d7P18U6q/nxRWLWkZOYfC28mZTKnd9n8qpYUCaez5VZSMpvFXZWWKa5cUnQaA99IqsX2Wdaye6uS1PkMUY/t70ZS7uH66KUnYLJJ8R7fL+NTHcmkyPxsf9eTCo6jmFlm8iGdlNnvCIHeeGAdf4dUUlQ/TO9eTeo0QCYSWZjck07KDscyOakDSiGdlHdof1eTqie+VrHU7YZMUn1fsko4TZxOisZuvLyWlHX+EhG/K/noRjKpkCc14E0wM91QApmkqBa3vytJNdMTM/ZhAubglFRDIrFpkWL2rP6jK5q7bFJ9FsbjvrmcQk72etdOjBPP55RKjR5/v/rkU+lkkyLF3Y+D0y6/Q/XZeZwo3Bz8lJtbwt74m9TL18d8k46bdw0KI1C+Pgb2RDw6faeG/vUxsNdB+7uX4uRdg8LAI/n3Csv8eN1jqdnZcrilfPMm36aMk+Hfo1G+uXAAAAAAAAAAAPgl/ufW5+L94dX43QTLEj33YpZ8S5Pp+p9ZrIbD6LQx0HXhnn9t0Pv6mN9KCINmZ2ZLHpFtHh9rGU15CBP+ulpOonhJ9LoaTSiK1w5eVjys9fBzSyTS4w/wO4HdnDmKImnU4JvU7fJF37SpoXTNBtliUNgJeccJ/JYy9nXStf7hcbHFn1H8wpPaTt6iFb0vVrvdG60/Fm80+vh832of0nq13wj39wMtVbNCcWNLLXcTWqTPNb5oOhKJfVUn0Zjb1LO98Kf/wocZBESKRhK1bVM6zJUvpzvaJxVFH/xlOpnuRhG9b7fT1emk2kc0We/2Gy0pXphEpj/uPNnEW2Kg8TI7/pUzyW+bpkkmtWxSC3zfvqVYHglNv03mxhkf/w/aG29p09FwuZzs1rvV4s+Sx8XPtPXudXQ4YML7sOH09fgpdlcVSTB6umfJgalZ1ljfb9Jzp++SLmtjcjVNJEfwujn8kQ/hbwyVDHmwGVBznPy1lu12tIii3S562U52r/H5NaLhZPly2LvKfIwx5n2c0iXN6MuaZ/rxz5vxzdZm7hktUgLH36jahqg3Lmw/da/obX33sVobzzEAAAAAAAAAAAAAAAAAAAAAAAAAAEDKX+t3P8wUeL/9AAAAAElFTkSuQmCC"
        width={500}
        height={200}
        // className="block md:hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
       
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
     
      </footer>
    </div>
  );
}

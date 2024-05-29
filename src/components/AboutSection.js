// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          

          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">MEOW The Bombshell token💜💣</h2>
            <p className="font-simpfxo text-base mb-4">
            MEOW is the only token that lets you trade like a cat on catnip: fast, furious, and absolutely f*cking hilarious.
            </p>
            <h3 className="font-courier-bold text-xl font-bold">MEOW is the token for degens who know that life's too short to chase anything but gains and laser pointers. </h3>
            <p className="font-simpfxo text-base mb-4">
            MEOW is the ultimate token for those who want to embrace their inner degen and live life like a cat: give zero f*cks, knock shit over, and always come out on top.
            </p>
            <ul className="font-simpfxo text-base space-y-2">
  
  <li>• Fair Launch using pump.fun</li>
  
  <li>• No Team Tokens just pure fun</li>
  
</ul>

            <div className="space-y-2 mb-4">

              {/* NFT Address and additional content can be added here */}
            </div>
            <a href="https://pump.fun/board" className="font-courier text-white bg-transparent border border-white py-2 px-4 rounded uppercase">
              Buy now on Pump.fun
            </a>
          </div>
                    {/* Left Side */}
                    <div className="space-y-6 flex justify-center">
            <img src="https://i.ibb.co/Hx7pMZw/side-bar.png" alt="A Love Letter To Wen Bros" className="max-w-xs md:max-w-sm" />
          </div>
        </div>
        
      </div>

      

      
    );
  }
  
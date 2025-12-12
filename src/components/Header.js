import React from 'react'
import Image from 'next/image'
import {
    BellIcon,
    ChatBubbleOvalLeftEllipsisIcon as ChatIcon,
    ChevronDownIcon,
    HomeIcon,   
    UserGroupIcon,
    ViewColumnsIcon
} from "@heroicons/react/24/solid"
import {
    FlagIcon,
    PlayIcon,
    MagnifyingGlassIcon as SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/24/outline"    

function Header() {
  return (
    <div>
        {/* Esquerda */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
            src="/facebook.png" 
            width={50}
            height={50}
            layout="fixed"
            alt='Logo do Facebook'/>

            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#f0f2f5',
                borderRadius: '20px',
                padding: '8px',
                marginLeft: '10px'
            }}>
                <SearchIcon style={{ height: '20px', width: '20px', color: '#65676b' }}/>
                <input 
                    type="text" 
                    placeholder="Pesquisar Facebook" 
                    style={{
                        display: 'none',
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none',
                        marginLeft: '8px'
                    }}
                    className="md:inline-flex"
                />
            </div>
        </div>

        {/* Central */}
        {/* Direita */}
    </div>
  )
}

export default Header
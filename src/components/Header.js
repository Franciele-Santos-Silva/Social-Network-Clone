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

import HeaderIcon from './HeaderIcon'

function Header() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '0 16px',
      height: '60px'
    }}>

      {/* Esquerda */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/facebook.png"
          width={40}
          height={40}
          alt="Logo do Facebook"
        />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f0f2f5',
          borderRadius: '20px',
          padding: '8px 12px',
          marginLeft: '10px'
        }}>
          <SearchIcon style={{ height: 20, width: 20, color: '#65676b' }} />
          <input
            type="text"
            placeholder="Pesquisar Facebook"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              marginLeft: '8px'
            }}
          />
        </div>
      </div>

      {/* Central */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <HeaderIcon Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>

      {/* Direita */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <ViewColumnsIcon style={{ height: 24 }} />
        <ChatIcon style={{ height: 24 }} />
        <BellIcon style={{ height: 24 }} />
        <ChevronDownIcon style={{ height: 24 }} />
      </div>

    </div>
  )
}

export default Header

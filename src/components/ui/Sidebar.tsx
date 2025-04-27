import React, { useState } from 'react';
import { 
  Home, 
  Compass, 
  History, 
  Bell, 
  MessageSquare, 
  Users, 
  Briefcase, 
  FolderTree, 
  User, 
  Bookmark, 
  Plus, 
  ChevronDown, 
  ChevronRight, 
  Inbox, 
  Send, 
  UserCheck, 
  Calendar, 
  Clock, 
  Video, 
  FileQuestion, 
  UserPlus, 
  TrendingUp,
  UserMinus,
  List,
  FileEdit,
  Settings,
  Moon,
  Shield,
  LayoutDashboard,
  Menu,
  ChevronsLeft
} from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    bookmarks: false,
    messages: false,
    interviews: false,
    settings: false
  });
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = (menu, event) => {
    // Prevent navigation when clicking on collapsible menu triggers
    event.preventDefault();
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { icon: <Home size={18} />, label: 'My Feed', subLabel: 'Home', link: '/feed' },
    { icon: <Compass size={18} />, label: 'Explore', link: '/explore' },
    { icon: <History size={18} />, label: 'History', link: '/history' },
    { 
      icon: <Bookmark size={18} />, 
      label: 'Bookmarks', 
      link: '/bookmarks',
      hasChildren: true,
      menuKey: 'bookmarks',
      children: [
        { label: 'All Saves', icon: null, link: '/bookmarks/saves' },
        { label: 'Collections', icon: null, link: '/bookmarks/collections' },
      ]
    },
    { icon: <FolderTree size={18} />, label: 'Projects', link: '/projects' },
    { 
      icon: <MessageSquare size={18} />, 
      label: 'Messages', 
      link: '/messages',
      hasChildren: true,
      menuKey: 'messages',
      children: [
        { label: 'Inbox', icon: <Inbox size={16} />, link: '/messages/inbox' },
        { label: 'Sent', icon: <Send size={16} />, link: '/messages/sent' },
        { label: 'Requests', icon: <UserCheck size={16} />, link: '/messages/requests' },
      ]
    },
    { icon: <Bell size={18} />, label: 'Notifications', link: '/notifications' },
    { 
      icon: <Users size={18} />, 
      label: 'Interviews', 
      link: '/interviews',
      hasChildren: true,
      menuKey: 'interviews',
      children: [
        { label: 'Interview Requests', icon: <UserPlus size={16} />, link: '/interviews/requests' },
        { label: 'Scheduled Interviews', icon: <Calendar size={16} />, link: '/interviews/scheduled' },
        { label: 'Past Interviews', icon: <Clock size={16} />, link: '/interviews/past' },
        { label: 'Live Interviews', icon: <Video size={16} />, link: '/interviews/live' },
        { label: 'Interview Resources', icon: <FileQuestion size={16} />, link: '/interviews/resources' },
        { label: 'Recruiter Dashboard', icon: <LayoutDashboard size={16} />, link: '/interviews/dashboard' },
      ]
    },
    { icon: <Briefcase size={18} />, label: 'Job Board', link: '/jobs' },
    { icon: <TrendingUp size={18} />, label: 'Trending', link: '/trending' },
    { icon: <UserMinus size={18} />, label: 'Following', link: '/following' },
    { icon: <List size={18} />, label: 'Categories', link: '/categories' },
    { icon: <FileEdit size={18} />, label: 'Drafts', link: '/drafts' },
    { 
      icon: <Settings size={18} />, 
      label: 'Settings', 
      link: '/settings',
      hasChildren: true,
      menuKey: 'settings',
      children: [
        { label: 'Profile', icon: <User size={16} />, link: '/settings/profile' },
        { label: 'Privacy', icon: <Shield size={16} />, link: '/settings/privacy' },
        { label: 'Theme (Dark/Light Mode)', icon: <Moon size={16} />, link: '/settings/theme' },
        { label: 'Account Management', icon: <UserCheck size={16} />, link: '/settings/account' },
      ]
    },
    { icon: <Shield size={18} />, label: 'Admin Panel (If applicable)', link: '/admin' },
  ];

  return (
    <div className={`transition-all duration-300 bg-[#0C0C0C] text-white flex flex-col border-r border-neutral-800 ${collapsed ? 'w-16' : 'w-64'} h-full`}>
      <div className="flex justify-between items-center p-4 border-b border-neutral-800">
        {!collapsed && <span className="text-lg font-medium text-white">Menu</span>}
        <button 
          className={`text-white p-1 rounded hover:bg-neutral-800 ${collapsed ? 'mx-auto' : ''}`}
          onClick={toggleSidebar}
        >
          {collapsed ? <Menu size={20} /> : <ChevronsLeft size={20} />}
        </button>
      </div>

      {!collapsed && (
        <div className="p-4">
          <Button variant="outline" className="w-full bg-neutral-200 text-neutral-800 hover:bg-neutral-300 flex items-center justify-center gap-2">
            <Plus size={16} />
            <span>New post</span>
          </Button>
        </div>
      )}

      {collapsed && (
        <div className="p-2">
          <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-800 hover:bg-neutral-300 flex items-center justify-center">
            <Plus size={16} />
          </Button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {collapsed ? (
                <Link href={item.link} className="flex items-center justify-center w-full p-2 rounded-md hover:bg-neutral-800 block">
                  <span className="text-white">{item.icon}</span>
                </Link>
              ) : item.hasChildren ? (
                <Collapsible 
                  open={openMenus[item.menuKey]} 
                  className="w-full"
                >
                  <CollapsibleTrigger asChild>
                    <a 
                      href={item.link} 
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-neutral-800 cursor-pointer"
                      onClick={(e) => toggleMenu(item.menuKey, e)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-white">{item.icon}</span>
                        <span className="text-white">{item.label}</span>
                      </div>
                      {openMenus[item.menuKey] ? <ChevronDown size={16} className="text-white" /> : <ChevronRight size={16} className="text-white" />}
                    </a>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="pl-7 space-y-1 mt-1">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link href={child.link} className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-800 cursor-pointer">
                            {child.icon && <span className="text-white">{child.icon}</span>}
                            <span className="text-white">{child.label}</span>
                            {child.label === 'Collections' && (
                              <button className="ml-auto text-neutral-400">
                                <Plus size={16} />
                              </button>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link href={item.link} className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-neutral-800 text-left">
                  <span className="text-white">{item.icon}</span>
                  <span className="text-white">{item.label}</span>
                  {item.subLabel && <span className="text-xs text-neutral-400 ml-1">({item.subLabel})</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
import React, { ReactNode } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
  

interface MeetingModalProps{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?:  string;
    children?:  ReactNode;
    handleclick?: () => void;
    buttonText?:  string;
    image?: string;
    buttonIcon?: string;
}

const MeetingModal = ({
    isOpen, onClose, title, className, children, buttonText, handleclick, image, buttonIcon
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onclose}>
        <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
            <div className="flex flex-col gap-6">
                {image && (
                    <div className='flex justify-between'>
                        <Image src={image} alt='image' width={72} height={72} />
                    </div>
                )}
                <h1 className={cn('text-3xl font-bold leading-[42px]',className)}>{title}</h1>
                {children}
                <Button className='bg-blue-1 focus-visible:right-0 focus-visible:ring-offset-0' onClick={handleclick} >
                    {buttonIcon && (
                        <Image src={buttonIcon} alt='button icon' width={13} height={13}/>
                    )} &nbsp;
                    {buttonText || 'schedule Meeting'}
                </Button>
            </div>
        </DialogContent>
    </Dialog>

  )
}

export default MeetingModal
'use client';

import React from 'react';
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from '@radix-ui/react-accordion';

import { ChevronDown } from 'lucide-react';

import { cn } from '../../utils';

import './Accordion.styles.css';

const Accordion = Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item ref={ref} className={cn('accordion-item', className)} {...props} />
));

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="flex">
    <Trigger
      ref={ref}
      className={cn('accordion-trigger', className)}
      {...props}
    >
      {children}
      <ChevronDown className="accordion-trigger-icon" />
    </Trigger>
  </Header>
));

AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content ref={ref} className="accordion-content" {...props}>
    <div className={cn('accordion-content-children', className)}>
      {children}
    </div>
  </Content>
));

AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

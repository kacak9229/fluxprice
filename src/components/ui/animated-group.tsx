"use client";
import { JSX, ReactNode } from "react";
import { motion, Variants } from "motion/react";
import React from "react";

export type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: React.ElementType;
  asChild?: React.ElementType;
};

// Make sure both states exist so spreading never touches `undefined`
const defaultContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: { hidden: { y: 20 }, visible: { y: 0 } },
  scale: { hidden: { scale: 0.8 }, visible: { scale: 1 } },
  blur: { hidden: { filter: "blur(4px)" }, visible: { filter: "blur(0px)" } },
  "blur-slide": {
    hidden: { filter: "blur(4px)", y: 20 },
    visible: { filter: "blur(0px)", y: 0 },
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: "spring" as const, stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 8 },
    },
  },
};

// Safe merges — item gets opacity defaults, container does NOT
const addItemDefaults = (v?: Variants) => ({
  hidden: { ...(defaultItemVariants.hidden as object), ...(v?.hidden ?? {}) },
  visible: {
    ...(defaultItemVariants.visible as object),
    ...(v?.visible ?? {}),
  },
});

const addContainerDefaults = (v?: Variants) => ({
  hidden: { ...(v?.hidden ?? {}) },
  visible: { ...(v?.visible ?? {}) },
});

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = "div",
  asChild = "div",
}: AnimatedGroupProps) {
  const selectedItem = addItemDefaults(preset ? presetVariants[preset] : {});
  const selectedContainer = addContainerDefaults(defaultContainerVariants);

  const containerVariants = variants?.container
    ? addContainerDefaults(variants.container)
    : selectedContainer;

  const itemVariants = variants?.item
    ? addItemDefaults(variants.item)
    : selectedItem;

  const MotionComponent = React.useMemo(
    () => motion.create(as as keyof JSX.IntrinsicElements),
    [as]
  );
  const MotionChild = React.useMemo(
    () => motion.create(asChild as keyof JSX.IntrinsicElements),
    [asChild]
  );

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <MotionChild key={index} variants={itemVariants}>
          {child}
        </MotionChild>
      ))}
    </MotionComponent>
  );
}

export { AnimatedGroup };

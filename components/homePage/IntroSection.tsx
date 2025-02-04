import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionFlex = motion(Flex);

interface IntroSectionProps {
  animate: boolean;
}

const IntroSection: React.FC<IntroSectionProps> = ({ animate }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (animate) {
      controls.start("visible");
    }
  }, [animate, controls]);

  const letterVariants = {
    hidden: {
      y: 20,
      opacity: 0.1,
      color: "#f9f9f8",
    },
    visible: {
      y: 0,
      opacity: 1,
      color: ["#f9f9f8", "#c7c8c8", "#c6332e"],
      transition: {
        y: { type: "spring", damping: 10, stiffness: 100, duration: 0.5 },
        opacity: { duration: 0.5 },
        color: {
          times: [0, 0.1, 1],
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + custom * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Box
      width="100%"
      minHeight="75vh"
      bg="brand.light"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={{ base: "100px", lg: "50px" }}
    >
      <Box
        maxWidth="1300px"
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px={6}
      >
        <MotionFlex
          width="100%"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          pl={{ base: "0", lg: "95px" }}
        >
          {"ABOUT".split("").map((letter, index) => (
            <MotionText
              key={index}
              variants={letterVariants}
              fontSize={{ base: "22px", md: "26px", lg: "30px" }}
              fontWeight="300"
              letterSpacing={6}
            >
              {letter}
            </MotionText>
          ))}
        </MotionFlex>
        <Flex
          w="100%"
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="center"
          alignItems="center"
          mt={8}
          gap={8}
        >
          <MotionBox
            position="relative"
            maxWidth={{ base: "400px", md: "500px", lg: "600px" }}
            width="100%"
            height={{ base: "250px", md: "300px", lg: "500px" }}
            variants={contentVariants}
            custom={0}
            initial="hidden"
            animate={controls}
          >
            <Image
              src="https://res.cloudinary.com/datj4og4i/image/upload/f_auto,q_auto/v1725725397/floor-plan2_f0juoa.png"
              alt="floor-plan"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </MotionBox>
          <VStack
            p={2}
            zIndex={4}
            align={{ base: "center", lg: "flex-start" }}
            flex={0.8}
            spacing={4}
          >
            <MotionHeading
              as="h2"
              fontSize={{ base: "26px", md: "30px", lg: "35px" }}
              color="brand.dark"
              fontWeight="400"
              letterSpacing="1px"
              whiteSpace="nowrap"
              variants={contentVariants}
              custom={1}
              initial="hidden"
              animate={controls}
              mb={{ base: "10px", lg: "18px" }}
            >
              簡單步驟&nbsp;&nbsp;&nbsp;無限地獄
            </MotionHeading>
            <MotionHeading
              as="h3"
              fontSize={{ base: "30px", md: "20px", lg: "22px" }}
              fontWeight="400"
              letterSpacing="1px"
              variants={contentVariants}
              custom={2}
              initial="hidden"
              animate={controls}
              textAlign={{ base: "center", lg: "left" }}
              mb={2}
            >
              <Text display={{ base: "block", md: "inline" }}>
                輕鬆創建居家平面配置圖，
              </Text>
              <Text display={{ base: "block", md: "inline" }}>
                實現每一個靈感
              </Text>
            </MotionHeading>
            <VStack
              spacing={2}
              width="100%"
              alignItems={{ base: "center", lg: "flex-start" }}
            >
              {[
                "直觀易用的操作介面，每個人都能輕鬆上手",
                "從個人房間到整套住宅，均可繪製",
                "豐富的家具和裝飾元素選擇，滿足多元設計需求",
              ].map((text, index) => (
                <MotionBox
                  key={index}
                  variants={contentVariants}
                  custom={index + 3}
                  initial="hidden"
                  animate={controls}
                  width="100%"
                >
                  <HStack
                    spacing={3}
                    alignItems="center"
                    justifyContent={{ base: "center", lg: "flex-start" }}
                  >
                    <Show above="lg">
                      <Box flexShrink={0}>
                        <FaCircleChevronRight color="#c6332e" size="16px" />
                      </Box>
                    </Show>
                    <Text
                      whiteSpace={index === 0 ? "nowrap" : "normal"}
                      fontWeight={300}
                      fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                      color="brand.dark"
                    >
                      {text}
                    </Text>
                  </HStack>
                </MotionBox>
              ))}
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default IntroSection;

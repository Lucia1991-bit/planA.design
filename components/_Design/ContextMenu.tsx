import React from "react";
import { Box, VStack, Button, HStack, Text, Divider } from "@chakra-ui/react";
import { MdKeyboardCommandKey } from "react-icons/md";
import {
  LuClipboard,
  LuTrash2,
  LuCopy,
  LuFlipHorizontal2,
  LuFlipVertical2,
} from "react-icons/lu";
import useDesignPageColor from "@/hooks/useDesignPageColor";

interface ContextMenuProps {
  x: number;
  y: number;
  hasActiveObject: boolean;
  canCopy: () => boolean;
  canPaste: () => boolean;
  onClose: () => void;
  onCopy: () => void;
  onPaste: () => void;
  onDelete: () => void;
  onMirrorHorizontally: () => void;
  onMirrorVertically: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  hasActiveObject,
  canCopy,
  canPaste,
  onClose,
  onCopy,
  onPaste,
  onDelete,
  onMirrorHorizontally,
  onMirrorVertically,
}) => {
  const handleAction = (action: () => void) => {
    action();
    onClose();
  };

  const color = useDesignPageColor();

  return (
    <Box
      position="fixed"
      width="180px"
      left={x}
      top={y}
      zIndex={20}
      bg={color.toolBar.backgroundColor}
      boxShadow="md"
      borderRadius="md"
      border={`0.5px solid ${color.toolBar.hover}`}
      py={2}
    >
      <VStack spacing={0} align="stretch">
        <Button
          fontSize="13.5px"
          borderRadius="0"
          color={color.toolBar.text}
          onClick={() => handleAction(onCopy)}
          leftIcon={<LuCopy />}
          justifyContent="flex-start"
          variant="ghost"
          w="100%"
          px={3}
          py={1}
          _hover={{
            bg: color.toolBar.hover,
          }}
          fontWeight="500"
          isDisabled={!canCopy()}
          _disabled={{
            opacity: 0.4,
            cursor: "default",
            _hover: { bg: "transparent" },
          }}
        >
          <HStack
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>複製</Text>
            <HStack
              fontSize="12px"
              color={color.toolBar.subText}
              fontWeight="300"
              spacing={0}
            >
              <MdKeyboardCommandKey />
              <Text>C</Text>
            </HStack>
          </HStack>
        </Button>
        <Button
          fontSize="13.5px"
          borderRadius="0"
          color={color.toolBar.text}
          onClick={() => handleAction(onPaste)}
          leftIcon={<LuClipboard />}
          justifyContent="flex-start"
          variant="ghost"
          w="100%"
          px={3}
          py={1}
          _hover={{
            bg: color.toolBar.hover,
          }}
          fontWeight="500"
          isDisabled={!canPaste()}
          _disabled={{
            opacity: 0.4,
            cursor: "default",
            _hover: { bg: "transparent" },
          }}
        >
          <HStack
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>貼上</Text>
            <HStack
              fontSize="12px"
              color={color.toolBar.subText}
              fontWeight="300"
              spacing={0}
            >
              <MdKeyboardCommandKey />
              <Text>V</Text>
            </HStack>
          </HStack>
        </Button>
        <Button
          fontSize="13.5px"
          borderRadius="0"
          color={color.toolBar.text}
          onClick={() => handleAction(onDelete)}
          leftIcon={<LuTrash2 />}
          justifyContent="flex-start"
          variant="ghost"
          w="100%"
          px={3}
          py={1}
          _hover={{
            bg: color.toolBar.hover,
          }}
          fontWeight="500"
          isDisabled={!hasActiveObject}
          _disabled={{
            opacity: 0.4,
            cursor: "default",
            _hover: { bg: "transparent" },
          }}
        >
          <HStack
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>刪除</Text>
            <Text
              fontSize="12px"
              color={color.toolBar.subText}
              fontWeight="300"
            >
              DELETE
            </Text>
          </HStack>
        </Button>
        <Divider
          orientation="horizontal"
          height="100%"
          borderColor={color.navBar.hover}
        />
        <Button
          fontSize="13.5px"
          borderRadius="0"
          color={color.toolBar.text}
          onClick={() => handleAction(onMirrorHorizontally)}
          leftIcon={<LuFlipHorizontal2 />}
          justifyContent="flex-start"
          variant="ghost"
          w="100%"
          px={3}
          py={1}
          _hover={{
            bg: color.toolBar.hover,
          }}
          fontWeight="500"
          isDisabled={!hasActiveObject}
          _disabled={{
            opacity: 0.4,
            cursor: "default",
            _hover: { bg: "transparent" },
          }}
        >
          <HStack
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>水平鏡射</Text>
          </HStack>
        </Button>
        <Button
          fontSize="13.5px"
          borderRadius="0"
          color={color.toolBar.text}
          onClick={() => handleAction(onMirrorVertically)}
          leftIcon={<LuFlipVertical2 />}
          justifyContent="flex-start"
          variant="ghost"
          w="100%"
          px={3}
          py={1}
          _hover={{
            bg: color.toolBar.hover,
          }}
          fontWeight="500"
          isDisabled={!hasActiveObject}
          _disabled={{
            opacity: 0.4,
            cursor: "default",
            _hover: { bg: "transparent" },
          }}
        >
          <HStack
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>垂直鏡射</Text>
          </HStack>
        </Button>
      </VStack>
    </Box>
  );
};

export default ContextMenu;

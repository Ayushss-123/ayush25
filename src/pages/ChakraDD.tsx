import { FunctionComponent } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Checkbox,
  RadioGroup,
  Radio,
  Stack,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Switch,
  Textarea,
  Progress,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  Box,
} from "@chakra-ui/react";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import styles from "./ChakraDD.module.css";

const ChakraDD: FunctionComponent = () => {
  return (
    <div className={styles.chakraDD}>
      <div className={styles.button}>Button</div>
      <div className={styles.buttons}>
        <img className={styles.image12Icon} alt="" src="../image-12@2x.png" />
        <img className={styles.image11Icon} alt="" src="../image-11@2x.png" />
        <img className={styles.image10Icon} alt="" src="../image-10@2x.png" />
        <div className={styles.solid}>Solid</div>
        <div className={styles.outline}>Outline</div>
        <div className={styles.ghost}>Ghost</div>
        <Button
          className={styles.buttonGhostTextAndIcon}
          variant="ghost"
          colorScheme="purple"
          size="lg"
          leftIcon={<ArrowBackIcon />}
          rightIcon={<ArrowForwardIcon />}
          isDisabled
        >
          Button
        </Button>
        <Button
          className={styles.rectangleButton}
          variant="ghost"
          w="180px"
          colorScheme="purple"
          size="lg"
          leftIcon={<ArrowBackIcon />}
          rightIcon={<ArrowForwardIcon />}
          isDisabled
        >
          Button
        </Button>
        <Button
          className={styles.buttonOutlinedTextAndIcon}
          variant="outline"
          colorScheme="red"
          size="lg"
          as="a"
          href="https://www.locofy.ai/"
          target="_top"
          isLoading
        >
          Button
        </Button>
        <Button
          className={styles.rectangleButton1}
          variant="outline"
          w="75px"
          colorScheme="red"
          size="lg"
          as="a"
          href="https://www.locofy.ai/"
          target="_top"
          isLoading
          isDisabled
        >
          Button
        </Button>
        <Button
          className={styles.buttonSolidTextAndIcon}
          variant="solid"
          colorScheme="teal"
          size="lg"
          leftIcon={<ArrowBackIcon />}
          rightIcon={<ArrowForwardIcon />}
          as="a"
          href="/non-ui-lib"
          target="_top"
        >
          Button
        </Button>
        <Button
          className={styles.frameButton}
          variant="solid"
          w="209px"
          colorScheme="teal"
          size="lg"
          leftIcon={<ArrowBackIcon />}
          rightIcon={<ArrowForwardIcon />}
          as="a"
          href="/non-ui-lib"
          target="_top"
        >
          Button
        </Button>
      </div>
      <div className={styles.button}>Input</div>
      <div className={styles.inputs}>
        <img className={styles.image8Icon} alt="" src="../image-8@2x.png" />
        <img className={styles.image7Icon} alt="" src="../image-7@2x.png" />
        <img className={styles.image9Icon} alt="" src="../image-9@2x.png" />
        <div className={styles.outlined}>Outlined</div>
        <div className={styles.filled}>Filled</div>
        <div className={styles.flushed}>Flushed</div>
        <InputGroup className={styles.inputFlushed} width="320px" w="320px">
          <InputLeftElement
            pointerEvents="none"
            children={<ArrowBackIcon color="gray.300" />}
          />
          <InputRightElement
            pointerEvents="none"
            children={<ArrowForwardIcon color="gray.300" />}
          />
          <Input
            variant="flushed"
            textColor="#0000ff"
            backgroundColor="#fff"
            borderColor="#ff0000"
            focusBorderColor="#00fff2"
            type="email"
            value="sid@locofy.ai"
            placeholder="Placeholder"
          />
        </InputGroup>
        <InputGroup className={styles.frameInputGroup} width="209px" w="209px">
          <InputLeftElement
            pointerEvents="none"
            children={<ArrowBackIcon color="gray.300" />}
          />
          <InputRightElement
            pointerEvents="none"
            children={<ArrowBackIcon color="gray.300" />}
          />
          <Input
            variant="flushed"
            textColor="#0000ff"
            backgroundColor="#fff"
            borderColor="#ff0000"
            focusBorderColor="#00fff2"
            size="md"
            type="email"
            value="sid@locofy.ai"
            placeholder="Placeholder"
          />
        </InputGroup>
        <InputGroup className={styles.inputFilled} width="320px" w="320px">
          <InputLeftElement
            pointerEvents="none"
            children={<ArrowBackIcon color="gray.300" />}
          />
          <InputRightElement
            pointerEvents="none"
            children={<ArrowForwardIcon color="gray.300" />}
          />
          <Input
            variant="filled"
            textColor="#ff0000"
            backgroundColor="#faf9f9"
            borderColor="#03e5f2"
            focusBorderColor="#ffe300"
            size="xs"
            value="Value"
            placeholder="Placeholder"
            isDisabled
          />
        </InputGroup>
        <InputGroup className={styles.frameInputGroup1} width="209px" w="209px">
          <InputLeftElement
            pointerEvents="none"
            children={<ArrowBackIcon color="gray.300" />}
          />
          <InputRightElement
            pointerEvents="none"
            children={<ArrowForwardIcon color="gray.300" />}
          />
          <Input
            variant="filled"
            textColor="#ff0000"
            backgroundColor="#fff"
            borderColor="#03e5f2"
            focusBorderColor="#ffe300"
            size="xs"
            type="password"
            value="Value"
            placeholder="Placeholder"
            isDisabled
          />
        </InputGroup>
        <InputGroup className={styles.inputOutline} width="299px" w="299px">
          <InputLeftElement
            pointerEvents="none"
            children={<ArrowBackIcon color="gray.300" />}
          />
          <InputRightElement
            pointerEvents="none"
            children={<ArrowForwardIcon color="gray.300" />}
          />
          <Input
            variant="outline"
            textColor="#0ff000"
            backgroundColor="#faf9f9"
            borderColor="#03e5f2"
            size="lg"
            value="Value"
            placeholder="Placeholder"
          />
        </InputGroup>
        <InputGroup className={styles.frameInputGroup2} width="209px" w="209px">
          <InputLeftElement
            pointerEvents="none"
            children={<ArrowBackIcon color="gray.300" />}
          />
          <InputRightElement
            pointerEvents="none"
            children={<ArrowForwardIcon color="gray.300" />}
          />
          <Input
            variant="outline"
            textColor="#0ff000"
            backgroundColor="#faf9f9"
            borderColor="#03e5f2"
            focusBorderColor="#3182ce"
            size="lg"
            type="text"
            value="Value"
            placeholder="Placeholder"
          />
        </InputGroup>
      </div>
      <div className={styles.button}>
        <p className={styles.checkbox1}>Checkbox</p>
      </div>
      <div className={styles.checkbox2}>
        <img className={styles.image13Icon} alt="" src="../image-13@2x.png" />
        <img className={styles.image14Icon} alt="" src="../image-14@2x.png" />
        <img className={styles.image51Icon} alt="" src="../image-51@2x.png" />
        <img className={styles.image16Icon} alt="" src="../image-16@2x.png" />
        <img className={styles.image17Icon} alt="" src="../image-17@2x.png" />
        <img className={styles.image18Icon} alt="" src="../image-18@2x.png" />
        <div className={styles.defaultLabel}>Default + Label</div>
        <div className={styles.default}>Default</div>
        <div className={styles.checkedLabel}>Checked + Label</div>
        <div className={styles.checked}>Checked</div>
        <div className={styles.indeterminateLabel}>Indeterminate + Label</div>
        <div className={styles.indeterminate}>Indeterminate</div>
        <Checkbox
          className={styles.checkboxChecked}
          defaultChecked
          colorScheme="orange"
          iconColor="#000"
          spacing="0.5rem"
          isIndeterminate
        />
        <Checkbox
          className={styles.rectangleCheckbox}
          defaultChecked
          colorScheme="orange"
          spacing="0.5rem"
          isIndeterminate
        />
        <Checkbox
          className={styles.checkboxChecked1}
          defaultChecked
          colorScheme="cyan"
          size="lg"
          spacing="0.5rem"
          isInvalid
        />
        <Checkbox
          className={styles.rectangleRadioGroup}
          defaultChecked
          colorScheme="cyan"
          size="lg"
          spacing="5"
          isInvalid
        />
        <Checkbox
          className={styles.checkboxDefault}
          colorScheme="blue"
          iconColor="#fe3d3d"
          spacing="0.5rem"
        />
        <Checkbox
          className={styles.rectangleCheckbox2}
          colorScheme="blue"
          iconColor="#ff3d3d"
          spacing="0.5rem"
        />
        <Checkbox
          className={styles.checkboxCheckedWithLabel}
          defaultChecked
          colorScheme="pink"
          iconColor="#000"
          spacing="0.5rem"
          isIndeterminate
        >
          Label
        </Checkbox>
        <Checkbox
          className={styles.rectangleCheckbox3}
          defaultChecked
          colorScheme="pink"
          spacing="0.5rem"
          isIndeterminate
        >
          Label
        </Checkbox>
        <Checkbox
          className={styles.checkboxCheckedWithLabel1}
          defaultChecked
          colorScheme="red"
          iconColor="#fff"
          size="lg"
          spacing="0.5rem"
          isDisabled
        >
          Label
        </Checkbox>
        <Checkbox
          className={styles.rectangleCheckbox4}
          defaultChecked
          colorScheme="red"
          iconColor="#fff"
          size="lg"
          spacing="0.5rem"
          isDisabled
        >
          Label
        </Checkbox>
        <Checkbox
          className={styles.checkboxDefaultWithLabel}
          colorScheme="teal"
          iconColor="#000"
          spacing="0.5rem"
        >
          Label
        </Checkbox>
        <Checkbox
          className={styles.rectangleCheckbox5}
          colorScheme="teal"
          spacing="0.5rem"
        >
          Label
        </Checkbox>
      </div>
      <div className={styles.button}>Radio</div>
      <div className={styles.checkbox2}>
        <img className={styles.image19Icon} alt="" src="../image-19@2x.png" />
        <img className={styles.image20Icon} alt="" src="../image-20@2x.png" />
        <img className={styles.image21Icon} alt="" src="../image-21@2x.png" />
        <img className={styles.image22Icon} alt="" src="../image-22@2x.png" />
        <div className={styles.defaultLabel}>Default + Label</div>
        <div className={styles.checkedLabel}>Checked + Label</div>
        <div className={styles.default}>Default</div>
        <div className={styles.checked}>Checked</div>
        <RadioGroup className={styles.radioChecked}>
          <Radio defaultChecked colorScheme="cyan" isDisabled />
        </RadioGroup>
        <RadioGroup className={styles.rectangleRadioGroup}>
          <Radio defaultChecked colorScheme="cyan" isDisabled />
        </RadioGroup>
        <RadioGroup className={styles.radioDefault}>
          <Radio colorScheme="blue" size="lg" isInvalid />
        </RadioGroup>
        <RadioGroup className={styles.rectangleCheckbox2}>
          <Radio colorScheme="blue" size="lg" isInvalid />
        </RadioGroup>
        <RadioGroup className={styles.radioCheckedWithLabel}>
          <Radio defaultChecked colorScheme="red" size="lg">
            Label
          </Radio>
        </RadioGroup>
        <RadioGroup className={styles.rectangleCheckbox4}>
          <Radio defaultChecked colorScheme="red" size="lg">
            Label
          </Radio>
        </RadioGroup>
        <RadioGroup className={styles.radioDefaultWithLabel}>
          <Radio colorScheme="teal">Label</Radio>
        </RadioGroup>
        <RadioGroup className={styles.rectangleRadioGroup3}>
          <Radio colorScheme="teal">Label</Radio>
        </RadioGroup>
      </div>
      <div className={styles.button}>Select</div>
      <div className={styles.inputs}>
        <img className={styles.image26Icon} alt="" src="../image-26@2x.png" />
        <img className={styles.image33Icon} alt="" src="../image-33@2x.png" />
        <img className={styles.image25Icon} alt="" src="../image-25@2x.png" />
        <div className={styles.outline1}>Outline</div>
        <div className={styles.filled1}>Filled</div>
        <div className={styles.flushed1}>Flushed</div>
        <Stack className={styles.selectFlushed} w="324px">
          <Select
            variant="flushed"
            placeholder="Select"
            textColor="#ff0000"
            backgroundColor="#0ff000"
            borderColor="#000"
            focusBorderColor="#c232cf"
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </Select>
        </Stack>
        <Stack className={styles.frameStack} w="209px">
          <Select
            variant="flushed"
            placeholder="Placeholder"
            textColor="#ff0000"
            backgroundColor="#0ff000"
            borderColor="#000"
            focusBorderColor="#c232cf"
          >
            <option value="Options 1">Options 1</option>
            <option value="Options 2">Options 2</option>
            <option value="Options 3">Options 3</option>
          </Select>
        </Stack>
        <Stack className={styles.selectFilled} w="324px">
          <Select
            variant="filled"
            placeholder="Select"
            backgroundColor="#ff0000"
            borderColor="#0000ff"
            focusBorderColor="#0ff000"
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </Select>
        </Stack>
        <Stack className={styles.frameStack1} w="209px">
          <Select
            variant="filled"
            placeholder="Placeholder"
            backgroundColor="#ff0000"
            borderColor="#0000ff"
            focusBorderColor="#0ff000"
          >
            <option value="Options 1">Options 1</option>
            <option value="Options 2">Options 2</option>
            <option value="Options 3">Options 3</option>
          </Select>
        </Stack>
        <Stack className={styles.selectOutline} w="324px">
          <Select
            variant="outline"
            placeholder="Select"
            textColor="#0ff000"
            backgroundColor="#000"
            borderColor="#ffc100"
            focusBorderColor="#ff0000"
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </Select>
        </Stack>
        <Stack className={styles.frameButton} w="209px">
          <Select
            variant="outline"
            placeholder="Placeholder"
            textColor="#0ff000"
            backgroundColor="#000"
            borderColor="#ffc100"
            focusBorderColor="#ff0000"
          >
            <option value="Options 1">Options 1</option>
            <option value="Options 2">Options 2</option>
            <option value="Options 3">Options 3</option>
          </Select>
        </Stack>
      </div>
      <div className={styles.button}>Slider</div>
      <div className={styles.inputs2}>
        <img className={styles.image27Icon} alt="" src="../image-27@2x.png" />
        <img className={styles.image32Icon} alt="" src="../image-32@2x.png" />
        <Slider
          className={styles.sliderDefault}
          width="324px"
          defaultValue={50}
          colorScheme="blue"
          orientation="vertical"
          h="6px"
          min={0}
          max={100}
          step={10}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Slider
          className={styles.frameSlider}
          width="223px"
          defaultValue={50}
          colorScheme="blue"
          orientation="vertical"
          h="10px"
          min={0}
          max={100}
          step={10}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Slider
          className={styles.sliderDefault1}
          width="324px"
          defaultValue={25}
          colorScheme="blue"
          min={0}
          max={100}
          step={10}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Slider
          className={styles.frameSlider1}
          width="223px"
          defaultValue={50}
          colorScheme="blue"
          min={0}
          max={100}
          step={10}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
      <div className={styles.button}>Switch</div>
      <div className={styles.inputs3}>
        <img className={styles.image31Icon} alt="" src="../image-31@2x.png" />
        <img className={styles.image30Icon} alt="" src="../image-30@2x.png" />
        <Switch
          className={styles.switchDefault}
          colorScheme="blue"
          defaultChecked
          isDisabled
        />
        <Switch
          className={styles.groupSwitch}
          colorScheme="blue"
          defaultChecked
          isDisabled
        />
        <Switch
          className={styles.switchDefault1}
          colorScheme="blue"
          defaultChecked
        />
        <Switch
          className={styles.groupSwitch1}
          colorScheme="blue"
          defaultChecked
        />
      </div>
      <div className={styles.button}>Textarea</div>
      <div className={styles.inputs}>
        <img className={styles.image38Icon} alt="" src="../image-38@2x.png" />
        <img className={styles.image35Icon} alt="" src="../image-35@2x.png" />
        <img className={styles.image37Icon} alt="" src="../image-37@2x.png" />
        <div className={styles.outline1}>Outline</div>
        <div className={styles.filled1}>Filled</div>
        <div className={styles.flushed1}>Flushed</div>
        <Textarea
          className={styles.textAreaFlushed}
          variant="flushed"
          w="297px"
          value="Value"
          placeholder="Placeholder"
          textColor="#000"
          backgroundColor="#fbfbfb"
          borderColor="#ff0000"
          focusBorderColor="#0ff000"
          isDisabled
        />
        <Textarea
          className={styles.frameStack}
          variant="flushed"
          w="209px"
          value="Value"
          placeholder="Placeholder"
          textColor="#000"
          backgroundColor="#fbfbfb"
          borderColor="#ff0000"
          focusBorderColor="#0ff000"
          isDisabled
          isRequired
        />
        <Textarea
          className={styles.textAreaFilled}
          variant="filled"
          w="297px"
          placeholder="Placeholder"
          textColor="#0ff000"
          backgroundColor="#ff0000"
          borderColor="#ffc100"
          focusBorderColor="#0000ff"
        />
        <Textarea
          className={styles.frameStack1}
          variant="filled"
          w="209px"
          size="lg"
          placeholder="Placeholder"
          textColor="#0ff000"
          backgroundColor="#ff0000"
          borderColor="#ffc100"
          focusBorderColor="#0000ff"
          isReadOnly
        />
        <Textarea
          className={styles.textAreaOutline}
          variant="outline"
          w="297px"
          placeholder="Placeholder"
          textColor="#0ff000"
          backgroundColor="#fff"
          borderColor="#ffc100"
          focusBorderColor="#ff0000"
          isReadOnly
        />
        <Textarea
          className={styles.frameButton}
          variant="outline"
          w="209px"
          size="lg"
          value="Value"
          placeholder="Placeholder"
          textColor="#0ff000"
          backgroundColor="#fff"
          borderColor="#ffc100"
          focusBorderColor="#ff0000"
          isReadOnly
        />
      </div>
      <div className={styles.button}>Progress</div>
      <div className={styles.inputs5}>
        <img className={styles.image39Icon} alt="" src="../image-39@2x.png" />
        <img className={styles.image41Icon} alt="" src="../image-41@2x.png" />
        <img className={styles.image43Icon} alt="" src="../image-43@2x.png" />
        <Progress
          className={styles.progressDefault}
          w="324px"
          size="lg"
          value={50}
          colorScheme="red"
          hasStripe
        />
        <Progress
          className={styles.frameProgress}
          w="223px"
          size="lg"
          value={50}
          colorScheme="red"
          hasStripe
        />
        <Progress
          className={styles.progressDefault1}
          w="324px"
          size="lg"
          value={50}
          colorScheme="cyan"
          isIndeterminate
        />
        <Progress
          className={styles.frameProgress1}
          w="223px"
          size="lg"
          value={50}
          colorScheme="cyan"
          isIndeterminate
        />
        <Progress
          className={styles.progressDefault2}
          w="324px"
          size="lg"
          value={50}
          colorScheme="blue"
        />
        <Progress
          className={styles.frameSlider1}
          w="223px"
          size="lg"
          value={50}
          colorScheme="blue"
        />
      </div>
      <div className={styles.button}>Dropdown</div>
      <div className={styles.inputs6}>
        <img className={styles.image44Icon} alt="" src="../image-44@2x.png" />
        <Stack className={styles.dropdownDefault}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="red"
            >
              Dropdown
            </MenuButton>
            <MenuList>
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
              <MenuItem value="Option 3">Option 3</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Stack className={styles.frameAccordion}>
          <Menu>
            <MenuButton
              w="222px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="red"
            >
              Dropdown
            </MenuButton>
            <MenuList>
              <MenuItem value="Options 1">Options 1</MenuItem>
              <MenuItem value="Options 2">Options 2</MenuItem>
              <MenuItem value="Options 3">Options 3</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </div>
      <div className={styles.button}>Accordion</div>
      <div className={styles.inputs7}>
        <img className={styles.image45Icon} alt="" src="../image-45@2x.png" />
        <Accordion className={styles.frameAccordion} w="222px" allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section Title
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Content</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles.dateTimePicker}>Date Time Picker</div>
      <div className={styles.inputs}>
        <Input
          className={styles.frameStack}
          variant="flushed"
          width="209px"
          backgroundColor="#fff"
          borderColor="#ff0000"
          type="dateTime-local"
          isDisabled
        />
        <img className={styles.image49Icon} alt="" src="../image-49@2x.png" />
        <img className={styles.image47Icon} alt="" src="../image-47@2x.png" />
        <img className={styles.image50Icon} alt="" src="../image-50@2x.png" />
        <div className={styles.outlined}>Outlined</div>
        <div className={styles.filled}>Filled</div>
        <div className={styles.flushed}>Flushed</div>
        <Input
          className={styles.dTPickerFlushed}
          variant="flushed"
          width="320px"
          borderColor="#ff0000"
          type="dateTime-local"
          isDisabled
        />
        <Input
          className={styles.dTPickerFilled}
          variant="filled"
          width="324px"
          textColor="#000"
          backgroundColor="#fb0000"
          borderColor="#0ff000"
          type="time"
        />
        <Input
          className={styles.frameStack1}
          variant="filled"
          width="209px"
          textColor="#000"
          backgroundColor="#fb0000"
          borderColor="#0ff000"
          size="lg"
          type="time"
        />
        <Input
          className={styles.dTPickerOutlined}
          variant="outline"
          width="320px"
          textColor="#0ff000"
          backgroundColor="#faf9f9"
          borderColor="#03e5f2"
          type="dateTime-local"
        />
        <Input
          className={styles.frameButton}
          variant="outline"
          width="209px"
          textColor="#0ff000"
          backgroundColor="#faf9f9"
          borderColor="#03e5f2"
          type="date"
        />
      </div>
    </div>
  );
};

export default ChakraDD;

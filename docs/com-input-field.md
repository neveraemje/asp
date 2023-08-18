
<style>
.columns {
  display: flex;
}

.column {
    width: 50%;
  flex: 1;
  padding: 10px;
  margin: 5px;
}

</style>




# Input field nude
![Alt text](image.png)

The nude input field enables users to input and edit information in string format when necessary. It is commonly utilized in form elements such as registration forms, login forms, and more.

## Availability


| Type | Status | URL |
| --- | --- | --- |
| Figma | Available |  |
| Motion Spec | Available | - |
| Accessibility | Available | - |
| Android | Available | https://source.golabs.io/asphalt/asphalt-aloha-android/-/blob/master/docs/asphalt-aloha/com.gojek.asphalt.aloha.inputfield/-aloha-input-field/index.md |
| IOS | Available | https://source.golabs.io/asphalt/asphalt-aloha-android/-/blob/master/docs/asphalt-aloha/com.gojek.asphalt.aloha.inputfield/-aloha-input-field/index.md |
| Flutter | Available | https://source.golabs.io/asphalt/asphalt-aloha-android/-/blob/master/docs/asphalt-aloha/com.gojek.asphalt.aloha.inputfield/-aloha-input-field/index.md |



## Variant

The Nude input has two variant which is regular and large sizes.

![Alt text](image-1.png)


## States

<div class="columns">
  <div class="column">
  <img width="554" alt="Screen Shot 2022-06-17 at 21 06 43" src="./public/image-2.png">
  </div>
  <div class="column">
    <strong>Default state</strong>
    <p>This state includes a label, a text input field, and a clear button.</p>
  </div>
</div>
<div class="columns">
  <div class="column">
  <img width="554" alt="Screen Shot 2022-06-17 at 21 06 43" src="./public/image-3.png">
  </div>
  <div class="column">
    <strong>Typing state</strong>
    <p>This state includes a label, a text input field, and a clear button.</p>
  </div>
</div>
<div class="columns">
  <div class="column">
   <img width="554" alt="Screen Shot 2022-06-17 at 21 06 43" src="./public/image-4.png">
  </div>
  <div class="column">
     <strong>Typed state</strong>
    <p>In this state, the label and text input fields are filled.</p>
  </div>
</div>
<div class="columns">
  <div class="column">
   <img width="554" alt="Screen Shot 2022-06-17 at 21 06 43" src="./public/image-5.png">
  </div>
  <div class="column">
     <strong>Error state</strong>
    <p>This state consists of a label, a text input field, and error messages.</p>
  </div>
</div>
<div class="columns">
  <div class="column">
   <img width="554" alt="Screen Shot 2022-06-17 at 21 06 43" src="./public/image-6.png">
  </div>
  <div class="column">
     <strong>Inactive state</strong>
    <p>In this state, the label and text input fields do not have borders when disabled.</p>
  </div>
</div>


---

## Usage

- The regular nude input field uses when multiple input fields are required in a screen as a form element. They can be stacked together and made to be used in a crowded layout.
- The large nude input field uses for prominent input on the screen, like the amount inputs.

## Behavior

- Clicking/tapping the input field changes the default state to the typing state, accompanied by a caret and a 'clear text' icon on the right end. It changes to the typed state once the input is done.
- The clear button on the right only appears after the first character is typed by the user.

## Modifiable

| Variant | Clear button icon | Description |
| --- | --- | --- |
| Regular size | 🚫 | Keep the close clear button icon unchanged and position it in the default level of the typing state. |
| Large size | 🚫 | Keep the close clear button icon unchanged and position it in the default level of the typing state. |

## Content guidelines

- Label text should be short and succinct (a word or two), so that the users can quickly scan the form, and should be written in sentence case, for e.g., Enter the amount, Payment type, etc.
- Use short and meaningful placeholder

## **Dos and Don’ts**

<div class="columns">
  <div class="column">
    <img width="554" alt="Screen Shot 2022-06-17 at 21 06 43" src="./public/image-26.png">
    <p>The nude input field must have a label text.</p>
  </div>
  <div class="column">
    <img width="554" alt="Screen Shot 2022-06-17 at 21 06 43" src="./public/image-28.png">
    <p>Do not use a nude input field without a label.</p>

  </div>
</div>

<div class="columns">
  <div class="column">
    <img width="554" alt="Screen Shot 2022-06-17 at 21 06 43" src="./public/image-29.png">
    <p>Mark required/mandatory fields with a *.</p>
  </div>
  <div class="column">
    <img width="554" alt="Screen Shot 2022-06-17 at 21 06 43" src="./public/image-30.png">
    <p>Do not use too long label text.</p>

  </div>
</div>



---

## Accessibility

### Touch target

The input field on the typing state has a clear button function that contains the touch target - **48px width and height.**

![Alt text](image-27.png)

---

## Changelog

| Date | Member Name | Change |
| --- | --- | --- |
| September, 1 2022 | Emje | Separated nude input field documentation |
| September, 1 2022 | Keith vaz, Emje | Update the status section |
| September, 1 2022 | Emje | Update structure documentation refer to new tempalte  and modifiable section Adding touch target section and  adding content guideline section |
| September, 1 2022 | Emje | Update the PIN Input field behavior |
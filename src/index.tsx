import { Component, h, JwcComponent, Prop, Fragment } from 'jwcjs'
import css from './index.css'

@Component({
  name: 'lantern-element',
  css,
})
export class LanternElement extends JwcComponent {

  /**
   * The text on lantern，use `,` to divide the text
   */
  @Prop({ default: '春,节' })
  text = '春,节'

  /**
   * The number of lanterns returned, up to 2
   */
  @Prop({ default: 2 })
  number = 2

  /**
   * display on moblie (very not recommended)
   */
  @Prop({ default: false })
  displayMobile = false;

  /**
   * Whether to display left or right; otherwise, the output will be based on the 'position' field
   */
  @Prop({ default: false })
  disPlayBoth = false

  /**
   * The position of the lantern, left or right
   */
  @Prop({ default: 'right'})
  position = 'right'

  private loopRender(i: number, position: string) {
    return (
      <div class={`lantern-box${i} push-${position} ${this.displayMobile ? '' : 'mobileNo'}`}>
        <div class="lantern">
          <div class="xian"></div>
          <div class="lantern-a">
            <div class="lantern-b">
              <div class="lantern-t">${this.sliceName()[i]}</div>
            </div>
          </div>
          <div class="shui shui-a">
            <div class="shui-c"></div>
            <div class="shui-b"></div>
          </div>
        </div>
      </div>
    )
  }

  private sliceName() {
    return this.text.split(',')
  }

  override render() {
    const arr = new Array(this.number)
    return (
      <>
        {
          this.disPlayBoth ? (
            <>
              {
                arr.map((_, i) => this.loopRender(i, 'left'))
              }
              {
                arr.map((_, i) => this.loopRender(i, 'right'))
              }
            </>
          ) : (
            <>
              {
                arr.map((_, i) => this.loopRender(i, this.position))
              }

            </>
          )
        }
      </>
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lantern-element': LanternElement
  }
}

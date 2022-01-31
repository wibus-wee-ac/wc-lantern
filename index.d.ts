/*
 * @FilePath: /wc-lantern/index.d.ts
 * @author: Wibus
 * @Date: 2022-01-31 11:55:45
 * @LastEditors: Wibus
 * @LastEditTime: 2022-01-31 11:55:45
 * Coding With IU
 */

import { LitElement, TemplateResult } from "lit";

export declare class LanternElement extends LitElement{
  static styles: import("lit").CSSResult;
  /**
   * The text on lantern，use `,` to divide the text
   */
  text: string;
  /**
   * The number of lanterns returned, up to 2
   */
  number: number;

  /**
   * Whether to display left or right; otherwise, the output will be based on the 'position' field
   */
  disPlayBoth: boolean;

  /**
   * The position of the lantern, left or right
   */
  position: string;
  render(): TemplateResult<1>;
}

declare global {
  interface HTMLElementTagNameMap {
    'lantern-element': LanternElement
  }
}
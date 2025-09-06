import "tsx/esm"
import {renderToStaticMarkup} from "react-dom/server"

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/css/")
  eleventyConfig.addWatchTarget("src/components/**/*.11ty.jsx")
  eleventyConfig.addWatchTarget("src/pages/**/*.11ty.jsx")

  // We can add support for TypeScript too, at the same time:
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        let content = await this.defaultRenderer(data)
        return renderToStaticMarkup(content)
      }
    },
  })

  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/css")
  eleventyConfig.addPassthroughCopy("src/assets")
  eleventyConfig.setQuietMode(false)

  // Log when builds happen
  eleventyConfig.on("eleventy.before", () => {
    console.log("🔄 Build starting...")
  })

  eleventyConfig.on("eleventy.after", ({dir, results, runMode, outputMode}) => {
    console.log("✅ Build complete!", results.length, "files processed")
  })
  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["11ty.jsx", "11ty.tsx", "11ty.ts", "md", "html"],
  }
}

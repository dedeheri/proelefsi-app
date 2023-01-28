function convertDataToHtml(blocks) {
  const convertedHtml = [];
  blocks.map((block) => {
    switch (block.type) {
      case "header":
        convertedHtml.push(
          ...[`<h${block.data.level}>${block.data.text}</h${block.data.level}>`]
        );
        break;
      case "embded":
        convertedHtml.push(
          ...[
            `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`,
          ]
        );
        break;
      case "paragraph":
        convertedHtml.push(...[`<p>${block.data.text}</p>`]);
        break;
      case "delimiter":
        convertedHtml.push(
          ...[`<div class="delimiter"><p>•</p><p>•</p><p>•</p></div`]
        );
        break;
      case "image":
        convertedHtml.push(
          ...[
            `<div>
              <img class="image-fluid" src="${block.data.file.url}" <img/>   
              <div class="caption-image">${block.data.caption}</div>
              </div>`,
          ]
        );
        break;
      case "code":
        convertedHtml.push(...[`<div id="code">${block.data.code}</div>`]);
        break;
      case "raw":
        convertedHtml.push(
          ...[`<div id="raw"><p>${block.data.html}</p></div>`]
        );
        break;
      case "list":
        convertedHtml.push("...[<ul>]");
        block.data.items.forEach(function (li) {
          convertedHtml.push(...[`<li>${li}</li>`]);
        });
        convertedHtml.push(...["</ul>"]);
        break;
      case "quote":
        convertedHtml.push(
          ...[
            `
          <div>
          <p>${block.data.text}</p>
          <p class="caption-image">${block.data.caption}</p>
          </div`,
          ]
        );
        break;
      default:
        break;
    }
  });
  return convertedHtml;
}

export default convertDataToHtml;

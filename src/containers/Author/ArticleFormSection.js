import React, { useState, useRef } from "react";
import { BiFolder, BiFile } from "react-icons/bi";
import clonedeep from "lodash.clonedeep";
import { useForm } from "react-hook-form";

import styles from "./ArticleFormSection.module.scss";

const ArticleFormSection = () => {
  const [sections, setSections] = useState([{ heading: "", content: [true] }]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageInputRef = useRef();
  const { ref, ...rest } = register("image", { required: true });

  const handleFormSubmit = (data) => console.log(data); // watch input value by passing the name of it

  const handleImagePicker = () => {
    imageInputRef.current.click();
    return;
  };

  const handleAddParagraph = (sectionIdx) => {
    const deepClonedObject = clonedeep(sections);
    deepClonedObject[sectionIdx].content.push(true);
    setSections(deepClonedObject);
    return;
  };

  const handleAddSection = (sectionIdx) => {
    const deepClonedObject = clonedeep(sections);
    deepClonedObject.push({ heading: "", content: [true] });
    setSections(deepClonedObject);
    return;
  };

  return (
    <div className={styles.ArticleFormSection}>
      <div className={styles.aboutSection}>
        <BiFile />
        <h1> New Article Form </h1>
        <p>
          Create a new blog post that can shine light on a topic relating to
          Japan
        </p>
      </div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={styles.titleInputContainer}>
          <label htmlFor="title">Title Of Article</label>
          {errors.title && (
            <p className={styles.inputError}> A title is required</p>
          )}
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Enter a title for your article"
          />
        </div>

        <div className={styles.imageSection}>
          <label htmlFor="image">Upload An Image</label>
          <input
            type="file"
            {...rest}
            ref={imageInputRef}
            className={styles.imageInput}
          />
          <p>File should be PNG, JPG, JPEG</p>
          {errors.image && (
            <p className={styles.inputError}> A valid image is required </p>
          )}
          <div className={styles.imageUpload} onClick={handleImagePicker}>
            <BiFolder />
            <p>
              Click To <span className={styles.underline}>Upload</span> An Image
            </p>
          </div>
        </div>

        <div className={styles.tagInputContainer}>
          <label htmlFor="tags">Tag</label>
          <p>When would this blog post be most useful for the reader?</p>
          {errors.tags && (
            <p className={styles.inputError}>You must select one tag</p>
          )}
          <select {...register("tags", { required: true })}>
            <option value="">Select...</option>
            <option value="Before-You-Leave">Before You Leave</option>
            <option value="During-Your-Trip">During Your Stay</option>
          </select>
        </div>

        <div className={styles.introductionInputContainer}>
          <label htmlFor="introduction">Introduction</label>
          <p>
            Write an introduction for your article. Explain the reason for the
            article or try to give a personal experience with the issue
          </p>
          {errors.introduction && (
            <p className={styles.inputError}>
              An introduction for the article is required
            </p>
          )}
          <textarea
            {...register("introduction", { required: true })}
          ></textarea>
        </div>

        <div className={styles.sectionsContainer}>
          <h3>Sections</h3>
          <p>
            Write the main content for your post here. Each section is made up
            of a title and paragraphs.
          </p>

          {sections.map((section, sidx) => {
            return (
              <div key={`${section}-${sidx}`} className={styles.section}>
                <label htmlFor={`section.${sidx}.heading`}>
                  Section - {sidx + 1} Title
                </label>
                {errors.section && (
                  <p className={styles.inputError}>
                    The section title is needed
                  </p>
                )}
                <input
                  {...register(`section.${sidx}.heading`, { required: true })}
                />

                {section.content.map((para, pidx) => {
                  return (
                    <div
                      key={`${para}-${pidx}`}
                      className={styles.sectionParagraph}
                    >
                      <label htmlFor="section">
                        Section - {sidx + 1} -- Paragraph - {pidx + 1}
                      </label>
                      {errors.section && (
                        <p className={styles.inputError}>
                          The section title is needed
                        </p>
                      )}
                      <textarea
                        {...register(`section.${sidx}.content.${pidx}`, {
                          required: true,
                        })}
                      />
                    </div>
                  );
                })}

                <div
                  onClick={() => handleAddParagraph(sidx)}
                  className={styles.addParagraphBtn}
                >
                  <p>Add Paragraph To Section</p>
                </div>
              </div>
            );
          })}
          <div onClick={handleAddSection} className={styles.addSectionBtn}>
            <p>Add Another Section</p>
          </div>
        </div>
        <button className={styles.createArticleBtn}> Create Article </button>
      </form>
    </div>
  );
};

export default ArticleFormSection;

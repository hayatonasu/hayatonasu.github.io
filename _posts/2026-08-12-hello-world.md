---
layout: post
title: "Trial Post (Terminals are pointwise revisited)"
date: 2026-08-12
tags: [demo, 1-category]
---

This is a trial post to test the blog.

Two years ago, Yuki Maehara and I observed that [limits of constant functors are pointwise](#callout-proposition-3). 
See this note for more details: [Terminals are pointwise](https://files.zotero.net/eyJleHBpcmVzIjoxNzg2NTY0MTcyLCJoYXNoIjoiNDdlMDUxMmNmNjcyM2VjMjBkYzkyNzg1ZGU0ZjNjMTkiLCJpdGVtIjoiMTQwMzE3MjNcL0lXVTJQMktQIiwiZmlsZW5hbWUiOiJOYXN1IC0gMjAyNCAtIFRlcm1pbmFscyBhcmUgcG9pbnR3aXNlLnBkZiIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb25cL3BkZiJ9/fa2a87b8ceba70616f3d8f706d7706b005b82d52d192160914695db48adca254/Nasu%20-%202024%20-%20Terminals%20are%20pointwise.pdf).
At that point, I could not find a reference for this fact.

Recently, I came across Bob Pare's paper ["Three easy pieces"](http://www.tac.mta.ca/tac/volumes/36/6/36-06abs.html) (Section 3. The square root of adjoints). 
The primary statement is:
>[!Theorem] 3.5 in the paper
>Let $F \colon\mathcal{C}\to \mathcal{D}$ be a functor, and suppose that $F\times F$ has a left adjoint $G$. Then, $F$ itself has a left adjoint $G'\colon \mathcal{D}\to \mathcal{C}$.

This is derived from the following general result about 2-monads:
>[!Theorem] 3.4 Theorem
>Let $\mathbf{K}$ be a 2-category and $T$ be a 2-monad on it. TFAE for a 1-cell $f\colon x\to y$ in $\mathbf{K}$:
>- $Tf$ has a left adjoint in $\mathbf{K}$.
>- $Tf$ has a left adjoint in the Eilenberg-Moore 2-category of $T$ (b/w the free algebras on them).
>- $Tf$ has a left adjoint in the Kleisli 2-category of $T$.


Taking $T=[\mathcal{A},-]$ on $\mathbf{Cat}$, Kleisli maps $F\colon\mathcal{C} \rightsquigarrow\mathcal{D}$ are $\mathcal{A}$-indexed families of functors $(F_{a}\colon \mathcal{C}\to \mathcal{D})_a$ , and the composition is the component-wise composition.  As long as $\mathcal{A}$ is non-empty, you get the (component-wise) left adjoint of the original functor as a Kleisli left adjoint.

Still, the statement that "limits of diagrams taking values in constant functors are pointwise" does not follow from this:
>[!Proposition] Limits of constant functors are pointwise
>If $[\mathcal{J},\Delta_{\mathcal{A}}]$ has an absolute left-lifting along $\Delta_{\mathcal{J}}\colon [\mathcal{A},\mathcal{C}]\to[\mathcal{J},[\mathcal{A},\mathcal{C}]]$ and $\mathcal{A}$ is non-empty, then $\Delta_{\mathcal{J}}\colon \mathcal{C}\to [\mathcal{J},\mathcal{C}]$ has a left adjoint.


<!--https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG1hdGhjYWx7Q30iXSxbMiwwLCJbXFxtYXRoY2Fse0p9LFxcbWF0aGNhbHtDfV0iXSxbMCwyLCJbXFxtYXRoY2Fse0F9LFxcbWF0aGNhbHtDfV0iXSxbMiwyLCJbXFxtYXRoY2Fse0p9LFtcXG1hdGhjYWx7QX0sXFxtYXRoY2Fse0N9XV0iXSxbMCwxLCJcXERlbHRhX3tcXG1hdGhjYWx7Sn19IiwyLHsib2Zmc2V0IjozfV0sWzAsMSwiXFxib3QiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJub25lIn0sImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMSwzLCJbXFxtYXRoY2Fse0p9LFxcRGVsdGFfe1xcbWF0aGNhbHtBfX1dIl0sWzEsMiwiXFxtYXRocm17Y29saW19IiwyLHsibGFiZWxfcG9zaXRpb24iOjgwfV0sWzIsMywiXFxEZWx0YV97XFxtYXRoY2Fse0p9fSIsMix7Im9mZnNldCI6Mn1dLFsxLDAsIiIsMCx7Im9mZnNldCI6Miwic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzcsOCwiIiwyLHsibGV2ZWwiOjEsInN0eWxlIjp7Im5hbWUiOiJhZGp1bmN0aW9uIn19XV0= -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG1hdGhjYWx7Q30iXSxbMiwwLCJbXFxtYXRoY2Fse0p9LFxcbWF0aGNhbHtDfV0iXSxbMCwyLCJbXFxtYXRoY2Fse0F9LFxcbWF0aGNhbHtDfV0iXSxbMiwyLCJbXFxtYXRoY2Fse0p9LFtcXG1hdGhjYWx7QX0sXFxtYXRoY2Fse0N9XV0iXSxbMCwxLCJcXERlbHRhX3tcXG1hdGhjYWx7Sn19IiwyLHsib2Zmc2V0IjozfV0sWzAsMSwiXFxib3QiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJub25lIn0sImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMSwzLCJbXFxtYXRoY2Fse0p9LFxcRGVsdGFfe1xcbWF0aGNhbHtBfX1dIl0sWzEsMiwiXFxtYXRocm17Y29saW19IiwyLHsibGFiZWxfcG9zaXRpb24iOjgwfV0sWzIsMywiXFxEZWx0YV97XFxtYXRoY2Fse0p9fSIsMix7Im9mZnNldCI6Mn1dLFsxLDAsIiIsMCx7Im9mZnNldCI6Miwic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzcsOCwiIiwyLHsibGV2ZWwiOjEsInN0eWxlIjp7Im5hbWUiOiJhZGp1bmN0aW9uIn19XV0=&embed" width="200" height="200" style="border-radius: 8px; border: none;"></iframe>
